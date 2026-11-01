import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const distDir = join(process.cwd(), "dist");
const indexPath = join(distDir, "index.html");
const serverEntry = join(process.cwd(), ".ssr", "entry-server.js");

const shellRoutes = [
  "node",
  "praxis",
  "product",
  "about",
  "resources",
  "contact",
  "careers",
  "privacy",
  "terms",
  "gdpr",
  "how-it-works",
];

const prerenderRoutes = [
  { url: "/", outPath: indexPath, mustInclude: ["Computer Vision.", "Greater Manchester"] },
  {
    url: "/node",
    outPath: join(distDir, "node", "index.html"),
    mustInclude: ["not in the accident book.", "Most sites are live within 2-4 weeks"],
  },
  {
    url: "/privacy",
    outPath: join(distDir, "privacy", "index.html"),
    mustInclude: ["This notice is for the website at nodehub.uk"],
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function upsertMeta(html, attr, key, content) {
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*\\/?>`);
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function applyDocument(shell, appHtml, seo) {
  let html = shell.replace(/<html lang="[^"]*">/, '<html lang="en-GB">');
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`);

  const metas = [
    ["name", "description", seo.description],
    ["property", "og:title", seo.title],
    ["property", "og:description", seo.description],
    ["property", "og:type", "website"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", seo.title],
    ["name", "twitter:description", seo.description],
  ];

  if (seo.canonical) {
    metas.push(["property", "og:url", seo.canonical]);
  }
  if (seo.image) {
    metas.push(["property", "og:image", seo.image]);
    metas.push(["name", "twitter:image", seo.image]);
    if (seo.imageWidth && seo.imageHeight) {
      metas.push(["property", "og:image:width", String(seo.imageWidth)]);
      metas.push(["property", "og:image:height", String(seo.imageHeight)]);
    }
    if (seo.imageAlt) metas.push(["property", "og:image:alt", seo.imageAlt]);
  }

  for (const [attr, key, content] of metas) {
    html = upsertMeta(html, attr, key, content);
  }

  if (seo.canonical) {
    const canonical = `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`;
    if (html.includes('rel="canonical"')) {
      html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, canonical);
    } else {
      html = html.replace("</head>", `    ${canonical}\n  </head>`);
    }
  }

  if (seo.jsonLd) {
    const json = JSON.stringify(seo.jsonLd).replace(/</g, "\\u003c");
    const script = `<script type="application/ld+json" id="route-jsonld">${json}</script>`;
    if (html.includes('id="route-jsonld"')) {
      html = html.replace(/<script type="application\/ld\+json" id="route-jsonld">[\s\S]*?<\/script>/, script);
    } else {
      html = html.replace("</head>", `    ${script}\n  </head>`);
    }
  }

  const root = '<div id="root"></div>';
  if (!html.includes(root)) {
    throw new Error("Built index.html is missing an empty #root placeholder");
  }
  html = html.replace(root, `<div id="root">${appHtml}</div>`);
  return html;
}

const shell = readFileSync(indexPath, "utf8");

for (const route of shellRoutes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, "index.html"), shell, "utf8");
}

const { render } = await import(pathToFileURL(serverEntry).href);

for (const route of prerenderRoutes) {
  const { html: appHtml, seo } = render(route.url);
  const page = applyDocument(shell, appHtml, seo);
  for (const snippet of route.mustInclude) {
    if (!page.includes(snippet)) {
      throw new Error(`Prerender of ${route.url} is missing expected text: ${snippet}`);
    }
  }
  if (!page.includes(`<title>${seo.title}</title>`)) {
    throw new Error(`Prerender of ${route.url} has the wrong title`);
  }
  if (seo.canonical && !page.includes(`href="${seo.canonical}"`)) {
    throw new Error(`Prerender of ${route.url} is missing its canonical URL`);
  }
  mkdirSync(join(route.outPath, ".."), { recursive: true });
  writeFileSync(route.outPath, page, "utf8");
  console.log(`Prerendered ${route.url} -> ${route.outPath}`);
}

console.log(
  `Copied SPA shell for routes: ${shellRoutes.filter((route) => route !== "node" && route !== "privacy").join(", ")}`,
);

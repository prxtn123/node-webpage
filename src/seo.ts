export const SITE_ORIGIN = "https://nodehub.uk";

export type RouteSeo = {
  title: string;
  description: string;
  canonical: string | null;
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
  imageAlt: string | null;
  jsonLd: Record<string, unknown> | null;
};

export type HeadMeta = {
  attr: "name" | "property";
  key: string;
  content: string;
};

const LEGACY_TITLE = "node | AI-Powered Logistics Safety";
const LEGACY_DESCRIPTION =
  "AI-powered safety platform for logistics and supply chain. Prevent near misses, ensure compliance, and optimise workflows.";

const organizationJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Praxis GB",
  legalName: "Praxis GB Ltd",
  url: `${SITE_ORIGIN}/`,
  logo: `${SITE_ORIGIN}/praxis-logo.png`,
  email: "hello@praxisgb.com",
  telephone: "+447542315784",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manchester",
    addressRegion: "England",
    addressCountry: "GB",
  },
  description:
    "Praxis GB builds computer vision applications that solve real-world problems — across industries, environments, and use cases.",
};

const home: RouteSeo = {
  title: "Praxis GB, on-site computer vision for UK logistics",
  description:
    "Praxis GB builds and runs edge computer vision systems in Greater Manchester. Video is processed on site. Our first product, node, detects warehouse safety risks.",
  canonical: `${SITE_ORIGIN}/`,
  image: `${SITE_ORIGIN}/images/hero-praxis.jpg`,
  imageWidth: 1920,
  imageHeight: 1278,
  imageAlt: "Praxis GB",
  jsonLd: organizationJsonLd,
};

const node: RouteSeo = {
  title: "node, near-miss detection for UK warehouses, by Praxis GB",
  description:
    "node uses existing cameras to flag MHE and pedestrian conflicts, PPE gaps and walkway breaches, processed on site, with clips and a site safety score for SHEQ teams.",
  canonical: `${SITE_ORIGIN}/node/`,
  image: `${SITE_ORIGIN}/images/hero-node.jpg`,
  imageWidth: 1920,
  imageHeight: 1280,
  imageAlt: "node",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "node",
    url: `${SITE_ORIGIN}/node/`,
    description: "AI-powered safety platform for logistics and supply chain.",
    provider: {
      "@type": "Organization",
      name: "Praxis GB",
      url: `${SITE_ORIGIN}/`,
    },
  },
};

const legacy: RouteSeo = {
  title: LEGACY_TITLE,
  description: LEGACY_DESCRIPTION,
  canonical: null,
  image: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: null,
  jsonLd: null,
};

export function normalisePath(pathname: string) {
  if (pathname.length > 1) return pathname.replace(/\/+$/, "");
  return pathname;
}

export function getRouteSeo(pathname: string): RouteSeo {
  const path = normalisePath(pathname);
  if (path === "/") return home;
  if (path === "/node") return node;
  return legacy;
}

export function headMeta(seo: RouteSeo): HeadMeta[] {
  const metas: HeadMeta[] = [
    { attr: "name", key: "description", content: seo.description },
    { attr: "property", key: "og:title", content: seo.title },
    { attr: "property", key: "og:description", content: seo.description },
    { attr: "property", key: "og:type", content: "website" },
    { attr: "name", key: "twitter:card", content: "summary_large_image" },
    { attr: "name", key: "twitter:title", content: seo.title },
    { attr: "name", key: "twitter:description", content: seo.description },
  ];

  if (seo.canonical) {
    metas.push({ attr: "property", key: "og:url", content: seo.canonical });
  }

  if (seo.image) {
    metas.push(
      { attr: "property", key: "og:image", content: seo.image },
      { attr: "name", key: "twitter:image", content: seo.image },
    );
    if (seo.imageWidth && seo.imageHeight) {
      metas.push(
        { attr: "property", key: "og:image:width", content: String(seo.imageWidth) },
        { attr: "property", key: "og:image:height", content: String(seo.imageHeight) },
      );
    }
    if (seo.imageAlt) {
      metas.push({ attr: "property", key: "og:image:alt", content: seo.imageAlt });
    }
  }

  return metas;
}

const MANAGED_META = [
  ["name", "description"],
  ["property", "og:title"],
  ["property", "og:description"],
  ["property", "og:type"],
  ["property", "og:url"],
  ["property", "og:image"],
  ["property", "og:image:width"],
  ["property", "og:image:height"],
  ["property", "og:image:alt"],
  ["name", "twitter:card"],
  ["name", "twitter:title"],
  ["name", "twitter:description"],
  ["name", "twitter:image"],
] as const;

export const managedMetaKeys = MANAGED_META;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteSeo, headMeta, managedMetaKeys } from "@/seo";

const JSON_LD_ID = "route-jsonld";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function DocumentHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(pathname);
    document.documentElement.lang = "en-GB";
    document.title = seo.title;

    const present = new Set(headMeta(seo).map((meta) => `${meta.attr}:${meta.key}`));
    for (const meta of headMeta(seo)) {
      upsertMeta(meta.attr, meta.key, meta.content);
    }
    for (const [attr, key] of managedMetaKeys) {
      if (!present.has(`${attr}:${key}`)) {
        document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
      }
    }

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (seo.canonical) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", seo.canonical);
    } else {
      canonical?.remove();
    }

    let jsonLd = document.getElementById(JSON_LD_ID);
    if (seo.jsonLd) {
      if (!jsonLd) {
        const script = document.createElement("script");
        script.id = JSON_LD_ID;
        script.type = "application/ld+json";
        document.head.appendChild(script);
        jsonLd = script;
      }
      jsonLd.textContent = JSON.stringify(seo.jsonLd);
    } else {
      jsonLd?.remove();
    }
  }, [pathname]);

  return null;
}

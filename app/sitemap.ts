import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/content";
import { LOCALES } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = ["", "/services", "/projects", "/about", "/coverage", "/contact", "/quote"];
  const servicePaths = SERVICES.map((service) => `/services/${service.slug}`);

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of [...staticPaths, ...servicePaths]) {
      const service = SERVICES.find((item) => path === `/services/${item.slug}`);
      entries.push({
        url: `${SITE.domain}/${locale}${path}`,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority:
          path === ""
            ? 1
            : path.startsWith("/services/")
              ? 0.9
              : path === "/coverage" || path === "/services"
                ? 0.85
                : 0.7,
        alternates: {
          languages: {
            en: `${SITE.domain}/en${path}`,
            ar: `${SITE.domain}/ar${path}`,
          },
        },
        ...(service ? { images: [`${SITE.domain}${service.image}`] } : {}),
      });
    }
  }

  return entries;
}

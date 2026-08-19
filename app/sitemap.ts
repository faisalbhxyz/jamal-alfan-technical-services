import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { FIELD_WORK, PROJECTS, SERVICES, SITE } from "@/lib/content";
import { LOCALES } from "@/lib/types";

const CONTENT_UPDATED = new Date("2026-08-19T00:00:00.000Z");

function languages(path: string): MetadataRoute.Sitemap[number]["alternates"] {
  return {
    languages: {
      en: `${SITE.domain}/en${path}`,
      ar: `${SITE.domain}/ar${path}`,
      "x-default": `${SITE.domain}/en${path}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const, images: [`${SITE.domain}/images/hero.jpg`, ...FIELD_WORK.map((shot) => `${SITE.domain}${shot.image}`), `${SITE.domain}/images/logo.png`, `${SITE.domain}/images/why.jpg`] },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const, images: SERVICES.map((s) => `${SITE.domain}${s.image}`) },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const, images: BLOG_POSTS.map((p) => `${SITE.domain}${p.image}`) },
    { path: "/coverage", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const, images: PROJECTS.map((p) => `${SITE.domain}${p.image}`) },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const, images: [`${SITE.domain}/images/about.jpg`] },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/quote", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/sitemap", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const item of staticPaths) {
      entries.push({
        url: `${SITE.domain}/${locale}${item.path}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: languages(item.path),
        ...(item.images ? { images: item.images } : {}),
      });
    }

    for (const service of SERVICES) {
      entries.push({
        url: `${SITE.domain}/${locale}/services/${service.slug}`,
        lastModified: CONTENT_UPDATED,
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: languages(`/services/${service.slug}`),
        images: [`${SITE.domain}${service.image}`],
      });
    }

    for (const post of BLOG_POSTS) {
      entries.push({
        url: `${SITE.domain}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: languages(`/blog/${post.slug}`),
        images: [`${SITE.domain}${post.image}`],
      });
    }
  }

  return entries;
}

import { BLOG_POSTS } from "@/lib/blog";
import { FIELD_WORK, PROJECTS, SERVICES, SITE } from "@/lib/content";
import { LOCALES } from "@/lib/types";

type ChangeFrequency = "weekly" | "monthly";

interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: ChangeFrequency;
  priority: number;
  images: readonly string[];
}

const CONTENT_UPDATED = "2026-08-19";

const STATIC_PATHS: readonly SitemapEntry[] = [
  {
    path: "",
    lastmod: CONTENT_UPDATED,
    changefreq: "weekly",
    priority: 1,
    images: [
      `${SITE.domain}/images/hero.jpg`,
      ...FIELD_WORK.map((shot) => `${SITE.domain}${shot.image}`),
      `${SITE.domain}/images/logo.png`,
      `${SITE.domain}/images/why.jpg`,
    ],
  },
  {
    path: "/services",
    lastmod: CONTENT_UPDATED,
    changefreq: "weekly",
    priority: 0.9,
    images: SERVICES.map((service) => `${SITE.domain}${service.image}`),
  },
  {
    path: "/blog",
    lastmod: CONTENT_UPDATED,
    changefreq: "weekly",
    priority: 0.85,
    images: BLOG_POSTS.map((post) => `${SITE.domain}${post.image}`),
  },
  {
    path: "/coverage",
    lastmod: CONTENT_UPDATED,
    changefreq: "monthly",
    priority: 0.85,
    images: [],
  },
  {
    path: "/projects",
    lastmod: CONTENT_UPDATED,
    changefreq: "monthly",
    priority: 0.8,
    images: PROJECTS.map((project) => `${SITE.domain}${project.image}`),
  },
  {
    path: "/about",
    lastmod: CONTENT_UPDATED,
    changefreq: "monthly",
    priority: 0.7,
    images: [`${SITE.domain}/images/about.jpg`],
  },
  {
    path: "/contact",
    lastmod: CONTENT_UPDATED,
    changefreq: "monthly",
    priority: 0.7,
    images: [],
  },
  {
    path: "/quote",
    lastmod: CONTENT_UPDATED,
    changefreq: "monthly",
    priority: 0.7,
    images: [],
  },
  {
    path: "/sitemap",
    lastmod: CONTENT_UPDATED,
    changefreq: "monthly",
    priority: 0.3,
    images: [],
  },
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function formatPriority(priority: number): string {
  return priority.toFixed(1);
}

function allEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [...STATIC_PATHS];

  for (const service of SERVICES) {
    entries.push({
      path: `/services/${service.slug}`,
      lastmod: CONTENT_UPDATED,
      changefreq: "monthly",
      priority: 0.9,
      images: [`${SITE.domain}${service.image}`],
    });
  }

  for (const post of BLOG_POSTS) {
    entries.push({
      path: `/blog/${post.slug}`,
      lastmod: post.updatedAt,
      changefreq: "monthly",
      priority: 0.8,
      images: [`${SITE.domain}${post.image}`],
    });
  }

  return entries;
}

function renderUrl(locale: (typeof LOCALES)[number], entry: SitemapEntry): string {
  const loc = `${SITE.domain}/${locale}${entry.path}`;
  const lines = [
    "<url>",
    `<loc>${escapeXml(loc)}</loc>`,
    `<lastmod>${entry.lastmod}</lastmod>`,
    `<changefreq>${entry.changefreq}</changefreq>`,
    `<priority>${formatPriority(entry.priority)}</priority>`,
    `<xhtml:link rel="alternate" hreflang="en" href="${escapeXml(`${SITE.domain}/en${entry.path}`)}" />`,
    `<xhtml:link rel="alternate" hreflang="ar" href="${escapeXml(`${SITE.domain}/ar${entry.path}`)}" />`,
    `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${SITE.domain}/en${entry.path}`)}" />`,
  ];

  for (const image of entry.images) {
    lines.push(
      "<image:image>",
      `<image:loc>${escapeXml(image)}</image:loc>`,
      "</image:image>",
    );
  }

  lines.push("</url>");
  return lines.join("\n");
}

export function buildSitemapXml(): string {
  const urls = LOCALES.flatMap((locale) =>
    allEntries().map((entry) => renderUrl(locale, entry)),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

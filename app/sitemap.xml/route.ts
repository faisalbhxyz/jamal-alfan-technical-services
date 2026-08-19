import { buildSitemapXml } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export function GET(): Response {
  return new Response(buildSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

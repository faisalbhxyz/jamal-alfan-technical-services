import { ImageResponse } from "next/og";
import { getService, SITE } from "@/lib/content";
import { LOCALES } from "@/lib/types";

export const alt = `${SITE.shortName} technical services`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    [
      "electrical-works",
      "painting-services",
      "interior-decor",
      "gypsum-ceiling-works",
      "tile-bathroom-work",
      "plumbing",
    ].map((slug) => ({ locale, slug })),
  );
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  // next/og (Satori) crashes on Arabic GSUB lookupType 5 / substFormat 3 during prerender.
  const title = service?.h1.en ?? SITE.name;
  const label = "Technical services · Dubai, UAE";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#022868",
          padding: "64px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: "#033A82",
              borderRadius: 16,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 6,
              paddingBottom: 10,
            }}
          >
            <div style={{ width: 12, height: 28, background: "#079CE0" }} />
            <div style={{ width: 14, height: 42, background: "white" }} />
            <div style={{ width: 12, height: 34, background: "#0685BE" }} />
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{SITE.shortName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, color: "#079CE0", marginBottom: 16 }}>{label}</div>
          <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, maxWidth: 980 }}>
            {title}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#079CE0" }}>054 458 2595 · 050 247 1185</div>
      </div>
    ),
    size,
  );
}

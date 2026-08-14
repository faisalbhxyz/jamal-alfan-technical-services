import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const slogan = locale === "ar" ? SITE.sloganAr : SITE.sloganEn;

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
          <div style={{ fontSize: 56, fontWeight: 800, color: "#079CE0" }}>
            {slogan}
          </div>
          <div style={{ marginTop: 16, fontSize: 24, color: "#94A3B8" }}>
            Electrical · Painting · Interiors · Gypsum · Bathrooms · Plumbing
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#079CE0" }}>054 458 2595 · 050 247 1185</div>
      </div>
    ),
    size,
  );
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jamal Alfan Technical Services Co.",
    short_name: "Jamal Alfan",
    description: "You dream it, we build it — technical services in Dubai, UAE.",
    start_url: "/en",
    display: "standalone",
    background_color: "#022868",
    theme_color: "#022868",
    lang: "en",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

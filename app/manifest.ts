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
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

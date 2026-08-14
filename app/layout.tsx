import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Jamal Alfan Technical Services Co. — electrical, painting, interiors, gypsum, bathrooms, and plumbing in Dubai, UAE.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.domain }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "construction",
  keywords: [
    "Jamal Alfan",
    "technical services Dubai",
    "electrician Dubai Marina",
    "villa painting Jumeirah",
    "gypsum ceiling Dubai",
    "bathroom tiling Abu Dhabi",
    "plumbing Sharjah",
    "interior decor UAE",
    "شركة جمال الفان",
    "خدمات فنية دبي",
    "كهربائي فلل دبي",
    "دهان فلل جميرا",
    "أسقف جبس دبي",
    "سباكة الشارقة",
    "مقاول تشطيبات الإمارات",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

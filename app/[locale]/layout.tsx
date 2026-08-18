import { Montserrat, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import type { Viewport } from "next";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SITE } from "@/lib/content";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { isLocale } from "@/lib/types";
import { dirFor } from "@/lib/utils";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const viewport: Viewport = {
  themeColor: "#022868",
  width: "device-width",
  initialScale: 1,
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }

  const locale = raw;
  const jsonLd = [localBusinessJsonLd(locale), websiteJsonLd(locale)];

  return (
    <html
      lang={locale === "ar" ? "ar-AE" : "en-AE"}
      dir={dirFor(locale)}
      className={`${montserrat.variable} ${tajawal.variable}`}
    >
      <body
        className={`flex min-h-screen flex-col pb-16 sm:pb-0 ${
          locale === "ar" ? "font-arabic" : "font-sans"
        }`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <FloatingActions locale={locale} />
        <span className="sr-only">{SITE.name}</span>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { CITIES, FAQS, getWhatsAppPhone, SERVICES, SITE } from "@/lib/content";
import { pageUrl } from "@/lib/i18n";
import type { Locale, Service } from "@/lib/types";

const UAE_KEYWORDS_EN = [
  "technical services Dubai",
  "electrician Dubai Marina",
  "villa painting Jumeirah",
  "gypsum ceiling Dubai",
  "bathroom tiling Abu Dhabi",
  "plumbing Sharjah",
  "interlock Dubai",
  "interior decor UAE",
  "contractor Business Bay",
  "Jamal Alfan",
] as const;

const UAE_KEYWORDS_AR = [
  "خدمات فنية دبي",
  "كهربائي فلل دبي",
  "دهان فلل جميرا",
  "أسقف جبس دبي",
  "بلاط حمامات أبوظبي",
  "سباك الشارقة",
  "إنترلوك دبي",
  "ديكور داخلي الإمارات",
  "مقاول دبي",
  "شركة جمال الفان",
] as const;

export function buildMetadata(options: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: readonly string[];
}): Metadata {
  const { locale, title, description, path = "", image, imageAlt, keywords: extra } = options;
  const canonical = pageUrl(locale, path);
  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const keywords = [
    ...(locale === "ar" ? UAE_KEYWORDS_AR : UAE_KEYWORDS_EN),
    ...(extra ?? []),
  ];
  const ogImage = image
    ? [{ url: image.startsWith("http") ? image : `${SITE.domain}${image}`, alt: imageAlt ?? title }]
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        en: pageUrl("en", path),
        ar: pageUrl("ar", path),
        "ar-AE": pageUrl("ar", path),
        "x-default": pageUrl("en", path),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: canonical,
      siteName: SITE.name,
      title: `${title} | ${SITE.shortName}`,
      description,
      countryName: SITE.location,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.shortName}`,
      description,
      images: ogImage?.map((item) => item.url),
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "og:locale:alternate": otherLocale === "ar" ? "ar_AE" : "en_AE",
      "geo.region": "AE-DU",
      "geo.placename": locale === "ar" ? SITE.locationAr : SITE.location,
      "geo.country": "AE",
    },
  };
}

export function localBusinessJsonLd(locale: Locale): Record<string, unknown> {
  const countryName = locale === "ar" ? SITE.regionAr : SITE.region;
  const whatsapp = getWhatsAppPhone().e164.replace(/[^\d]/g, "");

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${SITE.domain}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.domain,
    email: SITE.email,
    telephone: SITE.phones.map((phone) => phone.e164),
    slogan: locale === "ar" ? SITE.sloganAr : SITE.sloganEn,
    image: `${SITE.domain}/opengraph-image`,
    currenciesAccepted: SITE.currency,
    availableLanguage: [...SITE.languages],
    areaServed: CITIES.map((city) => ({
      "@type": "City",
      name: city.name[locale],
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.region[locale],
        containedInPlace: {
          "@type": "Country",
          name: city.country?.[locale] ?? countryName,
        },
      },
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: locale === "ar" ? "دبي" : "Dubai",
      addressLocality: locale === "ar" ? SITE.cityAr : SITE.city,
      addressRegion: "Dubai",
      addressCountry: SITE.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "ar" ? "الخدمات الفنية" : "Technical Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title[locale],
          description: service.short[locale],
          url: pageUrl(locale, `/services/${service.slug}`),
          areaServed: {
            "@type": "Country",
            name: countryName,
          },
        },
      })),
    },
    sameAs: [`https://wa.me/${whatsapp}`],
  };
}

export function websiteJsonLd(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    name: SITE.name,
    url: SITE.domain,
    inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
    publisher: {
      "@id": `${SITE.domain}/#business`,
    },
  };
}

export function faqJsonLd(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer[locale],
      },
    })),
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  crumbs: Array<{ name: string; path: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: pageUrl(locale, crumb.path),
    })),
  };
}

export function serviceJsonLd(locale: Locale, service: Service): Record<string, unknown> {
  const countryName = locale === "ar" ? SITE.regionAr : SITE.region;
  const path = `/services/${service.slug}`;
  const canonical = pageUrl(locale, path);
  const image = `${SITE.domain}${service.image}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: service.seoTitle[locale],
        description: service.seoDescription[locale],
        inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
        isPartOf: { "@id": `${SITE.domain}/#website` },
        about: { "@id": `${canonical}#service` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: image,
          caption: service.imageAlt[locale],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "ar" ? "الرئيسية" : "Home",
            item: pageUrl(locale, "/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "ar" ? "الخدمات" : "Services",
            item: pageUrl(locale, "/services"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title[locale],
            item: canonical,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: service.title[locale],
        alternateName: service.h1[locale],
        serviceType: service.title.en,
        description: service.seoDescription[locale],
        url: canonical,
        image,
        inLanguage: ["ar", "en"],
        provider: { "@id": `${SITE.domain}/#business` },
        areaServed: CITIES.map((city) => ({
          "@type": "City",
          name: city.name[locale],
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: city.region[locale],
            containedInPlace: {
              "@type": "Country",
              name: countryName,
            },
          },
        })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: canonical,
          servicePhone: getWhatsAppPhone().e164,
          serviceLocation: {
            "@type": "Country",
            name: countryName,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question[locale],
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer[locale],
          },
        })),
      },
    ],
  };
}

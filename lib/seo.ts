import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { CITIES, FAQS, getWhatsAppPhone, SERVICES, SITE } from "@/lib/content";
import { pageUrl } from "@/lib/i18n";
import type { BlogPost, Locale, Service } from "@/lib/types";

export const KEYWORD_CLUSTERS = {
  home: {
    en: [
      "technical services Dubai",
      "Jamal Alfan",
      "villa contractor Dubai",
      "electrical painting gypsum plumbing UAE",
    ],
    ar: [
      "خدمات فنية دبي",
      "شركة جمال الفان",
      "مقاول فلل دبي",
      "كهرباء دهان جبس سباكة الإمارات",
    ],
  },
  services: {
    en: [
      "technical services Dubai",
      "villa finishing contractor UAE",
      "electrical painting interiors gypsum plumbing interlock",
    ],
    ar: [
      "خدمات فنية دبي",
      "مقاول تشطيب فلل الإمارات",
      "كهرباء دهان ديكور جبس سباكة إنترلوك",
    ],
  },
  coverage: {
    en: [
      "technical services Dubai Marina",
      "contractor Jumeirah Arabian Ranches",
      "villa services Abu Dhabi Sharjah",
    ],
    ar: [
      "خدمات فنية دبي مارينا",
      "مقاول جميرا المرابع العربية",
      "خدمات فلل أبوظبي الشارقة",
    ],
  },
  projects: {
    en: ["villa projects Dubai", "majlis gypsum bathroom painting UAE"],
    ar: ["مشاريع فلل دبي", "مجلس جبس حمام دهان الإمارات"],
  },
  about: {
    en: ["Jamal Alfan Technical Services Co", "technical contractor Dubai UAE"],
    ar: ["شركة جمال الفان للخدمات الفنية", "مقاول فني دبي"],
  },
  contact: {
    en: ["contact Jamal Alfan Dubai", "WhatsApp 050 247 1185 technical services"],
    ar: ["تواصل جمال الفان دبي", "واتساب خدمات فنية 0502471185"],
  },
  quote: {
    en: ["quote technical services Dubai", "villa electrician painter plumber quote UAE"],
    ar: ["عرض سعر خدمات فنية دبي", "عرض كهرباء دهان سباكة فيلا"],
  },
  blog: {
    en: [
      "villa electrician Dubai cost",
      "villa painting cost Dubai",
      "gypsum ceiling bathroom renovation UAE",
    ],
    ar: [
      "تكلفة كهربائي فلل دبي",
      "تكلفة دهان فيلا دبي",
      "تكلفة جبس وتجديد حمام الإمارات",
    ],
  },
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  return `${SITE.domain}${path.startsWith("/") ? path : `/${path}`}`;
}

export function imageObject(
  path: string,
  caption: string,
  width = 1200,
  height = 800,
): Record<string, unknown> {
  const url = absoluteUrl(path);
  return {
    "@type": "ImageObject",
    url,
    contentUrl: url,
    caption,
    name: caption,
    width,
    height,
    inLanguage: ["en", "ar"],
  };
}

export function buildMetadata(options: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: readonly string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const {
    locale,
    title,
    description,
    path = "",
    image,
    imageAlt,
    keywords: extra,
    type = "website",
    publishedTime,
    modifiedTime,
  } = options;
  const canonical = pageUrl(locale, path);
  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const keywords = [...(extra ?? [])];
  const ogImageUrl = image
    ? absoluteUrl(image)
    : `${SITE.domain}/${locale}/opengraph-image`;
  const ogImage = [{ url: ogImageUrl, alt: imageAlt ?? title, width: 1200, height: 630 }];

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
      type,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      url: canonical,
      siteName: SITE.name,
      title: `${title} | ${SITE.shortName}`,
      description,
      countryName: SITE.location,
      images: ogImage,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [SITE.name],
          }
        : {}),
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
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
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
    image: SERVICES.map((service) => absoluteUrl(service.image)),
    logo: imageObject("/images/logo.png", SITE.name, 1693, 593),
    priceRange: "$$",
    currenciesAccepted: SITE.currency,
    paymentAccepted: "Cash, Bank Transfer",
    availableLanguage: [...SITE.languages],
    knowsAbout: SERVICES.map((service) => service.title[locale]),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phones[0]?.e164,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: [...SITE.languages],
    },
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
    about: { "@id": `${SITE.domain}/#business` },
  };
}

function speakableSpec(): Record<string, unknown> {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".aeo-answer", "[data-aeo='faq']"],
  };
}

export function pageJsonLd(
  locale: Locale,
  options: {
    type: string;
    path: string;
    name: string;
    description: string;
    crumbs: Array<{ name: string; path: string }>;
    image?: string;
    imageAlt?: string;
  },
): Record<string, unknown> {
  const canonical = pageUrl(locale, options.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": options.type,
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: options.name,
        description: options.description,
        inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
        isPartOf: { "@id": `${SITE.domain}/#website` },
        about: { "@id": `${SITE.domain}/#business` },
        speakable: speakableSpec(),
        ...(options.image
          ? { primaryImageOfPage: imageObject(options.image, options.imageAlt ?? options.name) }
          : {}),
      },
      breadcrumbJsonLd(locale, options.crumbs),
    ],
  };
}

export function homeJsonLd(locale: Locale): Record<string, unknown> {
  const canonical = pageUrl(locale, "/");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: locale === "ar"
          ? "خدمات فنية في دبي"
          : "Technical services in Dubai, UAE",
        description:
          locale === "ar"
            ? "شركة جمال الفان للخدمات الفنية — كهرباء ودهان وديكور وجبس وحمامات وسباكة وإنترلوك في دبي والإمارات."
            : "Jamal Alfan Technical Services Co. — electrical, painting, interiors, gypsum, bathrooms, plumbing, and interlock in Dubai and the UAE.",
        inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
        isPartOf: { "@id": `${SITE.domain}/#website` },
        about: { "@id": `${SITE.domain}/#business` },
        speakable: speakableSpec(),
        primaryImageOfPage: imageObject(
          "/images/hero.jpg",
          locale === "ar"
            ? "تشطيب فيلا في دبي من جمال الفان"
            : "Villa interior finishing in Dubai by Jamal Alfan",
          1600,
          900,
        ),
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#services`,
        name: locale === "ar" ? "الخدمات الفنية" : "Technical services",
        itemListElement: SERVICES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: pageUrl(locale, `/services/${service.slug}`),
          name: service.title[locale],
        })),
      },
      {
        "@type": "HowTo",
        "@id": `${canonical}#howto`,
        name: locale === "ar" ? "من الموجز إلى التسليم" : "From brief to handover",
        step: [
          locale === "ar"
            ? ["زيارة ومعاينة", "نمر على المساحة ونثبت النطاق."]
            : ["Site visit & brief", "We walk the space and confirm scope."],
          locale === "ar"
            ? ["عرض واضح", "النطاق والخامات والجدول مكتوباً."]
            : ["Clear proposal", "Scope, materials, and timeline in writing."],
          locale === "ar"
            ? ["تنفيذ محمي", "حماية الأرضيات وتسلسل الحرف."]
            : ["Protected execution", "Floors covered and trades sequenced."],
          locale === "ar"
            ? ["فحص وجولة", "اختبارات ثم تسليم مشترك."]
            : ["Test & walkthrough", "Tests, then a joint handover."],
        ].map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step[0],
          text: step[1],
        })),
      },
    ],
  };
}

export function servicesIndexJsonLd(locale: Locale): Record<string, unknown> {
  const crumbs = [
    { name: locale === "ar" ? "الرئيسية" : "Home", path: "" },
    { name: locale === "ar" ? "الخدمات" : "Services", path: "/services" },
  ];
  const page = pageJsonLd(locale, {
    type: "CollectionPage",
    path: "/services",
    name: locale === "ar" ? "الخدمات الفنية في دبي" : "Technical services in Dubai",
    description:
      locale === "ar"
        ? "سبعة تخصصات تحت مقاول واحد في دبي."
        : "Seven trades under one Dubai contractor.",
    crumbs,
  });
  const graph = (page["@graph"] as unknown[]) ?? [];
  graph.push({
    "@type": "ItemList",
    name: locale === "ar" ? "كتالوج الخدمات" : "Service catalog",
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: pageUrl(locale, `/services/${service.slug}`),
      name: service.h1[locale],
      image: absoluteUrl(service.image),
    })),
  });
  return { ...page, "@graph": graph };
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
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".aeo-answer", "[data-aeo='faq']"],
        },
        primaryImageOfPage: imageObject(service.image, service.imageAlt[locale], 1200, 825),
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
        image: imageObject(service.image, service.imageAlt[locale], 1200, 825),
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
        potentialAction: {
          "@type": "CommunicateAction",
          name: locale === "ar" ? "طلب عرض سعر" : "Request a quote",
          target: pageUrl(locale, `/quote?service=${service.slug}`),
        },
      },
      {
        "@type": "HowTo",
        "@id": `${canonical}#howto`,
        name: service.h1[locale],
        description: service.intro[locale],
        image: absoluteUrl(service.image),
        step: service.process.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title[locale],
          text: step.text[locale],
        })),
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

export function blogIndexJsonLd(locale: Locale): Record<string, unknown> {
  const canonical = pageUrl(locale, "/blog");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: locale === "ar" ? "أدلة التعيين في دبي" : "Dubai hire guides",
        description:
          locale === "ar"
            ? "تكاليف ونصائح تعيين لكهرباء الفلل والدهان والجبس والحمامات والسباكة والإنترلوك والتشطيب في دبي."
            : "Cost and hire guides for villa electrical, painting, gypsum, bathrooms, plumbing, interlock, and apartment fit-out in Dubai.",
        inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
        isPartOf: { "@id": `${SITE.domain}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#list`,
        itemListElement: BLOG_POSTS.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: pageUrl(locale, `/blog/${post.slug}`),
          name: post.title[locale],
        })),
      },
    ],
  };
}

export function articleJsonLd(locale: Locale, post: BlogPost): Record<string, unknown> {
  const path = `/blog/${post.slug}`;
  const canonical = pageUrl(locale, path);
  const service = SERVICES.find((item) => item.slug === post.serviceSlug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: post.h1[locale],
        name: post.seoTitle[locale],
        description: post.seoDescription[locale],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
        image: imageObject(post.image, post.imageAlt[locale]),
        url: canonical,
        mainEntityOfPage: `${canonical}#webpage`,
        author: { "@id": `${SITE.domain}/#business` },
        publisher: { "@id": `${SITE.domain}/#business` },
        articleSection: post.category[locale],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".aeo-answer", "[data-aeo='faq']"],
        },
        about: service
          ? {
              "@type": "Service",
              name: service.title[locale],
              url: pageUrl(locale, `/services/${service.slug}`),
            }
          : undefined,
        keywords: post.keywords[locale].join(", "),
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: post.seoTitle[locale],
        description: post.seoDescription[locale],
        inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
        isPartOf: { "@id": `${SITE.domain}/#website` },
        primaryImageOfPage: imageObject(post.image, post.imageAlt[locale]),
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
            name: locale === "ar" ? "الأدلة" : "Guides",
            item: pageUrl(locale, "/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title[locale],
            item: canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: post.faqs.map((faq) => ({
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

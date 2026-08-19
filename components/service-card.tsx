import { SeoImage } from "@/components/seo-image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { getDictionary, localizedPath } from "@/lib/i18n";
import type { Locale, Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  locale: Locale;
}

export function ServiceCard({ service, locale }: ServiceCardProps) {
  const dict = getDictionary(locale);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const href = localizedPath(locale, `/services/${service.slug}`);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white shadow-card transition-shadow hover:shadow-xl">
      <Link href={href} className="absolute inset-0 z-10 rounded-2xl ring-0 ring-brand-accent transition group-hover:ring-2">
        <span className="sr-only">{service.title[locale]}</span>
      </Link>
      <div className="relative">
        <div className="relative aspect-[16/11] overflow-hidden rounded-t-2xl clip-service">
          <SeoImage
            src={service.image}
            alt={service.imageAlt[locale]}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-6 start-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white shadow-lg">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
        <h3 className="font-display text-lg font-bold text-navy-900">
          {service.title[locale]}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {service.short[locale]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-800 group-hover:text-brand-accent">
          {dict.services.learnMore}
          <Arrow className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}

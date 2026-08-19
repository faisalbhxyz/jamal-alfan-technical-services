import { SeoImage } from "@/components/seo-image";
import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE } from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { enquiryWhatsAppHref, telHref } from "@/lib/utils";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const dict = getDictionary(locale);
  const primary = SITE.phones[0];

  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <SeoImage
        src="/images/hero.jpg"
        alt={
          locale === "ar"
            ? "تشطيب داخلي لفيلا في دبي بسقف جبس وإضاءة مدروسة — جمال الفان"
            : "Villa interior finishing in Dubai with gypsum ceiling and lighting — Jamal Alfan"
        }
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-veil" />
      <div className="pointer-events-none absolute inset-0 bg-navy-950/25" />
      <div className="pointer-events-none absolute inset-0 opacity-20 blueprint-grid" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-sky">
          {dict.hero.eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(1.75rem,8vw,2.25rem)] font-extrabold uppercase leading-[1.05] tracking-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] sm:text-6xl sm:leading-[0.95] lg:text-7xl">
          <span className="block text-brand-sky">{dict.hero.line1}</span>
          <span className="mt-1 block text-white sm:mt-2">{dict.hero.line2}</span>
        </h1>
        <p className="aeo-answer mt-6 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-lg">
          {dict.hero.body}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={telHref(primary.e164)} size="lg">
            <Phone className="h-5 w-5" />
            {dict.hero.ctaCall}
          </ButtonLink>
          <ButtonLink
            href={enquiryWhatsAppHref(locale)}
            variant="whatsapp"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {dict.hero.ctaWhatsapp}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

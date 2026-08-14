import { getWhatsAppPhone } from "@/lib/content";
import type { Locale } from "@/lib/types";
import { LOCALES, isLocale } from "@/lib/types";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function parseLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) {
    return value;
  }
  return "en";
}

export function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && LOCALES.includes(segments[1] as Locale)) {
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  }
  return `/${next}${pathname}`;
}

export function whatsappHref(phoneE164: string, text?: string): string {
  const digits = phoneE164.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  if (!text) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function enquiryWhatsAppHref(locale: Locale): string {
  const text =
    locale === "ar"
      ? "مرحباً، أرغب في الاستفسار عن خدمات جمال الفان."
      : "Hello, I would like to enquire about Jamal Alfan services.";
  return whatsappHref(getWhatsAppPhone().e164, text);
}

export function serviceWhatsAppHref(locale: Locale, serviceTitle: string): string {
  const text =
    locale === "ar"
      ? `مرحباً، أرغب في عرض سعر لخدمة ${serviceTitle} من جمال الفان.`
      : `Hello, I would like a quote for ${serviceTitle} from Jamal Alfan.`;
  return whatsappHref(getWhatsAppPhone().e164, text);
}

export function telHref(phoneE164: string): string {
  return `tel:${phoneE164}`;
}

import { getWhatsAppPhone, SITE } from "@/lib/content";
import { dictionaries } from "@/lib/i18n";
import { isLocale, type Locale, type QuotePayload } from "@/lib/types";
import { whatsappHref } from "@/lib/utils";

interface QuoteResult {
  ok: boolean;
  errors?: Partial<Record<keyof QuotePayload, string>>;
  whatsapp?: string;
}

const UAE_PHONE = /^(?:\+?971|0)?5\d{8}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(value: string): string {
  return value.replace(/[\s-]/g, "");
}

export function validateQuote(
  payload: QuotePayload,
  locale: Locale,
): QuoteResult {
  const t = dictionaries[locale].form;
  const errors: QuoteResult["errors"] = {};

  if (!payload.name.trim()) {
    errors.name = t.required;
  }
  if (!payload.phone.trim()) {
    errors.phone = t.required;
  } else if (!UAE_PHONE.test(normalizePhone(payload.phone))) {
    errors.phone = t.invalidPhone;
  }
  if (!payload.email.trim()) {
    errors.email = t.required;
  } else if (!EMAIL.test(payload.email)) {
    errors.email = t.invalidEmail;
  }
  if (!payload.service.trim()) {
    errors.service = t.required;
  }
  if (!payload.message.trim()) {
    errors.message = t.required;
  }

  if (errors && Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const text =
    locale === "ar"
      ? `طلب عرض سعر — ${SITE.shortName}\nالاسم: ${payload.name}\nالجوال: ${payload.phone}\nالبريد: ${payload.email}\nالخدمة: ${payload.service}\nالتفاصيل: ${payload.message}`
      : `Quote request — ${SITE.shortName}\nName: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nService: ${payload.service}\nDetails: ${payload.message}`;

  return {
    ok: true,
    whatsapp: whatsappHref(getWhatsAppPhone().e164, text),
  };
}

export function parseLocaleParam(value: unknown): Locale {
  return typeof value === "string" && isLocale(value) ? value : "en";
}

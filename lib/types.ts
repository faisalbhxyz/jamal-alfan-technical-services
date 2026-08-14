export type Locale = "en" | "ar";

export const LOCALES: readonly Locale[] = ["en", "ar"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export type Localized<T> = Record<Locale, T>;

export interface NavItem {
  href: string;
  label: Localized<string>;
}

export interface FaqItem {
  question: Localized<string>;
  answer: Localized<string>;
}

export interface ServiceSection {
  heading: Localized<string>;
  body: Localized<string>;
}

export interface ServiceStep {
  title: Localized<string>;
  text: Localized<string>;
}

export interface Service {
  slug: string;
  icon: "electrical" | "painting" | "interior" | "gypsum" | "bathroom" | "plumbing";
  image: string;
  imageAlt: Localized<string>;
  title: Localized<string>;
  short: Localized<string>;
  description: Localized<string>;
  features: Localized<string[]>;
  seoTitle: Localized<string>;
  seoDescription: Localized<string>;
  h1: Localized<string>;
  intro: Localized<string>;
  sections: ServiceSection[];
  process: ServiceStep[];
  faqs: FaqItem[];
  keywords: Localized<string[]>;
}

export interface Project {
  slug: string;
  title: Localized<string>;
  category: string;
  location: Localized<string>;
  image: string;
  imageAlt: Localized<string>;
}

export interface City {
  slug: string;
  name: Localized<string>;
  region: Localized<string>;
  blurb: Localized<string>;
  country?: Localized<string>;
}

export interface QuotePayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

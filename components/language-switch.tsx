"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";
import { cn, switchLocalePath } from "@/lib/utils";

interface LanguageSwitchProps {
  locale: Locale;
  className?: string;
}

const OPTIONS: Array<{ id: Locale; label: string; native: string }> = [
  { id: "en", label: "EN", native: "English" },
  { id: "ar", label: "عربي", native: "العربية" },
];

export function LanguageSwitch({ locale, className }: LanguageSwitchProps) {
  const pathname = usePathname();

  return (
    <div
      dir="ltr"
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-slate-200 bg-slate-50 p-0.5",
        className,
      )}
    >
      {OPTIONS.map((option) => {
        const active = locale === option.id;
        return (
          <Link
            key={option.id}
            href={switchLocalePath(pathname, option.id)}
            hrefLang={option.id}
            lang={option.id}
            aria-label={option.native}
            aria-current={active ? "true" : undefined}
            className={cn(
              "inline-flex h-8 min-w-[2.5rem] items-center justify-center rounded-full px-3 text-[11px] font-semibold transition-colors duration-150",
              option.id === "ar"
                ? "font-arabic tracking-normal"
                : "tracking-[0.14em]",
              active
                ? "bg-navy-900 text-white shadow-sm"
                : "text-navy-600 hover:text-navy-900",
            )}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

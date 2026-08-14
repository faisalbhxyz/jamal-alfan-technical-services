"use client";

import { useState, type FormEvent } from "react";
import { Button, Input, Select, Textarea } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SERVICES } from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import type { Locale, QuotePayload } from "@/lib/types";

interface QuoteFormProps {
  locale: Locale;
  presetService?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function QuoteForm({ locale, presetService }: QuoteFormProps) {
  const dict = getDictionary(locale);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [values, setValues] = useState<QuotePayload>({
    name: "",
    phone: "",
    email: "",
    service: presetService ?? "",
    message: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      const data = (await response.json()) as {
        ok: boolean;
        errors?: FormErrors;
        whatsapp?: string;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }

      setWhatsapp(data.whatsapp ?? "");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-navy-900">
          {dict.quote.successTitle}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{dict.quote.successBody}</p>
        {whatsapp ? (
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {dict.quote.successWhatsapp}
          </a>
        ) : null}
        <div className="mt-4">
          <Button
            variant="ghost"
            onClick={() => {
              setStatus("idle");
              setValues({
                name: "",
                phone: "",
                email: "",
                service: presetService ?? "",
                message: "",
              });
            }}
          >
            {dict.quote.another}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <Input
        id="name"
        name="name"
        label={dict.quote.name}
        value={values.name}
        error={errors.name}
        autoComplete="name"
        onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
      />
      <Input
        id="phone"
        name="phone"
        label={dict.quote.phone}
        value={values.phone}
        error={errors.phone}
        inputMode="tel"
        autoComplete="tel"
        dir="ltr"
        onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
      />
      <Input
        id="email"
        name="email"
        type="email"
        label={dict.quote.email}
        value={values.email}
        error={errors.email}
        autoComplete="email"
        dir="ltr"
        onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
      />
      <Select
        id="service"
        name="service"
        label={dict.quote.service}
        value={values.service}
        error={errors.service}
        onChange={(event) =>
          setValues((current) => ({ ...current, service: event.target.value }))
        }
      >
        <option value="">{dict.quote.servicePlaceholder}</option>
        {SERVICES.map((service) => (
          <option key={service.slug} value={service.slug}>
            {service.title[locale]}
          </option>
        ))}
      </Select>
      <Textarea
        id="message"
        name="message"
        label={dict.quote.message}
        placeholder={dict.quote.messagePlaceholder}
        value={values.message}
        error={errors.message}
        onChange={(event) =>
          setValues((current) => ({ ...current, message: event.target.value }))
        }
      />
      {status === "error" && Object.keys(errors).length === 0 ? (
        <p className="text-sm text-red-600">{dict.quote.error}</p>
      ) : null}
      <Button type="submit" className="w-full" size="lg" disabled={status === "loading"}>
        {status === "loading" ? dict.quote.sending : dict.quote.submit}
      </Button>
    </form>
  );
}

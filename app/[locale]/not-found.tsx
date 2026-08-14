import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-navy-900">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-500">
        The page you opened does not exist. Return home or browse services.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/en">Back home</ButtonLink>
        <ButtonLink href="/en/services" variant="navy">
          Services
        </ButtonLink>
      </div>
      <Link href="/ar" className="mt-4 text-sm text-slate-400 hover:text-brand-accent">
        العربية
      </Link>
    </div>
  );
}

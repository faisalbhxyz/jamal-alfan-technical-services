import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "accent" | "navy" | "outline" | "ghost" | "white" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  accent:
    "bg-brand-accent text-white shadow-float hover:bg-brand-accent-dark",
  navy: "bg-navy-900 text-white hover:bg-navy-800",
  outline:
    "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15",
  ghost: "text-navy-900 hover:text-brand-accent",
  white: "bg-white text-navy-900 hover:bg-slate-100",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57]",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  variant = "accent",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClass, variantClass[variant], sizeClass[size], className)}
      {...props}
    />
  );
}

interface ButtonLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  className,
  variant = "accent",
  size = "md",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(baseClass, variantClass[variant], sizeClass[size], className)}
      {...props}
    />
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
        — {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl text-balance">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-[15px] leading-relaxed text-slate-500">{body}</p>
      ) : null}
    </div>
  );
}

interface FieldProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, className, ...props }: FieldProps) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-medium text-navy-800">{label}</span>
      <input
        id={id}
        className={cn(
          "h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-navy-900 outline-none transition-shadow placeholder:text-slate-400 focus:ring-2 focus:ring-brand-accent/30",
          error ? "border-red-400" : "border-slate-200 focus:border-brand-accent",
          className,
        )}
        {...props}
      />
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, id, className, ...props }: TextareaProps) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-medium text-navy-800">{label}</span>
      <textarea
        id={id}
        className={cn(
          "min-h-32 w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy-900 outline-none transition-shadow placeholder:text-slate-400 focus:ring-2 focus:ring-brand-accent/30",
          error ? "border-red-400" : "border-slate-200 focus:border-brand-accent",
          className,
        )}
        {...props}
      />
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label: string;
  error?: string;
}

export function Select({
  label,
  error,
  id,
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-medium text-navy-800">{label}</span>
      <select
        id={id}
        className={cn(
          "h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-navy-900 outline-none transition-shadow focus:ring-2 focus:ring-brand-accent/30",
          error ? "border-red-400" : "border-slate-200 focus:border-brand-accent",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

interface PageHeroProps {
  title: string;
  crumbs: Array<{ label: string; href?: string }>;
}

export function PageHero({ title, crumbs }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden bg-slate-50">
      <div className="ruler-edge h-3 w-full opacity-70" />
      <div className="px-4 py-16 text-center sm:py-20">
        <h1 className="font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-4 text-sm text-slate-500">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              {index > 0 ? <span className="mx-2 text-slate-300">/</span> : null}
              {crumb.href ? (
                <a href={crumb.href} className="hover:text-brand-accent">
                  {crumb.label}
                </a>
              ) : (
                <span className="font-medium text-brand-accent">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
      <div className="band-hatch h-3 w-full" />
    </header>
  );
}

import { SeoImage } from "@/components/seo-image";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { QuoteForm } from "@/components/quote-form";
import { ContactCta } from "@/components/sections";
import { ButtonLink, Container } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { formatBlogDate } from "@/lib/blog";
import { getService, SITE } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import type { BlogBlock, BlogPost, Locale } from "@/lib/types";
import { serviceWhatsAppHref, telHref } from "@/lib/utils";

interface BlogArticleProps {
  locale: Locale;
  post: BlogPost;
  relatedPosts: BlogPost[];
}

function BlogBodyBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{block.text}</p>;
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-display text-xl font-bold text-navy-900">{block.text}</h3>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 list-decimal space-y-2 ps-5 text-[15px] leading-relaxed text-slate-600">
          {block.items.map((item) => (
            <li key={item} className="ps-1">
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border border-brand-accent/20 bg-brand-accent-soft p-5">
          <p className="font-display text-base font-bold text-navy-900">{block.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-navy-800">{block.text}</p>
        </aside>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100">
          {block.caption ? (
            <p className="border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs text-slate-500">
              {block.caption}
            </p>
          ) : null}
          <table className="w-full min-w-[36rem] text-start text-sm">
            <thead className="bg-navy-900 text-white">
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col" className="px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="odd:bg-white even:bg-slate-50">
                  {row.map((cell, index) => (
                    <td
                      key={`${row[0]}-${index}`}
                      className="px-4 py-3 align-top text-slate-600"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default: {
      const _never: never = block;
      return _never;
    }
  }
}

export function BlogArticle({ locale, post, relatedPosts }: BlogArticleProps) {
  const dict = getDictionary(locale);
  const service = getService(post.serviceSlug);
  const callPhone = SITE.phones[0];
  const whatsappHref = serviceWhatsAppHref(
    locale,
    service ? service.title[locale] : post.category[locale],
  );

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-slate-50">
          <div className="ruler-edge h-3 w-full opacity-70" />
          <Container className="py-10 sm:py-14">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <li>
                  <Link href={localizedPath(locale, "/")} className="hover:text-brand-accent">
                    {dict.breadcrumbs.home}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-300">
                  /
                </li>
                <li>
                  <Link href={localizedPath(locale, "/blog")} className="hover:text-brand-accent">
                    {dict.blog.eyebrow}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-300">
                  /
                </li>
                <li className="font-medium text-brand-accent" aria-current="page">
                  {post.category[locale]}
                </li>
              </ol>
            </nav>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  — {post.category[locale]}
                </p>
                <h1 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
                  {post.h1[locale]}
                </h1>
                <p className="aeo-answer mt-5 text-lg leading-relaxed text-slate-600">
                  {post.excerpt[locale]}
                </p>
                <p className="mt-4 text-sm text-slate-400">
                  <time dateTime={post.publishedAt}>
                    {formatBlogDate(post.publishedAt, locale)}
                  </time>
                  <span aria-hidden="true"> · </span>
                  {post.readingMinutes} {dict.blog.minutes}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={localizedPath(
                      locale,
                      service ? `/quote?service=${service.slug}` : "/quote",
                    )}
                    size="lg"
                  >
                    {dict.blog.ctaQuote}
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappHref}
                    variant="whatsapp"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    {dict.blog.ctaWhatsapp}
                  </ButtonLink>
                  <ButtonLink href={telHref(callPhone.e164)} variant="navy" size="lg">
                    <Phone className="h-4 w-4" />
                    {dict.blog.ctaCall}
                  </ButtonLink>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                <SeoImage
                  src={post.image}
                  alt={post.imageAlt[locale]}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
          <div className="band-hatch h-3 w-full" />
        </header>

        <Container className="grid items-start gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_22rem] sm:py-20">
          <div className="min-w-0">
            {post.body[locale].map((block, index) => (
              <BlogBodyBlock key={`${block.type}-${index}`} block={block} />
            ))}

            {service ? (
              <p className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
                {dict.blog.serviceLead}{" "}
                <Link
                  href={localizedPath(locale, `/services/${service.slug}`)}
                  className="font-semibold text-brand-accent hover:underline"
                >
                  {service.title[locale]}
                </Link>
                .
              </p>
            ) : null}

            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {dict.blog.faqTitle}
              </h2>
              <div className="mt-6 space-y-3">
                {post.faqs.map((item) => (
                  <details
                    key={item.question.en}
                    className="group rounded-2xl border border-slate-100 bg-white px-5 py-2 open:shadow-card"
                  >
                    <summary className="faq-summary cursor-pointer list-none py-3 font-display text-base font-bold text-navy-900">
                      <span className="flex items-center justify-between gap-4">
                        {item.question[locale]}
                        <span
                          aria-hidden="true"
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent-soft text-lg leading-none text-brand-accent group-open:bg-navy-900 group-open:text-white"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p
                      data-aeo="faq"
                      className="pb-4 text-sm leading-relaxed text-slate-500"
                    >
                      {item.answer[locale]}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <h2 className="font-display text-xl font-bold text-navy-900">
                {dict.blog.quoteTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {dict.blog.quoteBody}
              </p>
              <div className="mt-6">
                <QuoteForm locale={locale} presetService={post.serviceSlug} />
              </div>
            </div>
          </aside>
        </Container>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="bg-slate-50 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {dict.blog.related}
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} locale={locale} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <ContactCta locale={locale} />
    </>
  );
}

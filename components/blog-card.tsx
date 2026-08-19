import { SeoImage } from "@/components/seo-image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatBlogDate } from "@/lib/blog";
import { getDictionary, localizedPath } from "@/lib/i18n";
import type { BlogPost, Locale } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
  locale: Locale;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  const dict = getDictionary(locale);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const href = localizedPath(locale, `/blog/${post.slug}`);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-xl">
      <Link href={href} className="absolute inset-0 z-10 rounded-2xl ring-0 ring-brand-accent transition group-hover:ring-2">
        <span className="sr-only">{post.title[locale]}</span>
      </Link>
      <div className="relative aspect-[16/10] overflow-hidden">
        <SeoImage
          src={post.image}
          alt={post.imageAlt[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
          {post.category[locale]}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-navy-900">
          {post.title[locale]}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {post.excerpt[locale]}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <time dateTime={post.publishedAt} className="text-slate-400">
            {formatBlogDate(post.publishedAt, locale)}
          </time>
          <span className="inline-flex items-center gap-1 font-semibold text-navy-800 group-hover:text-brand-accent">
            {dict.blog.read}
            <Arrow className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

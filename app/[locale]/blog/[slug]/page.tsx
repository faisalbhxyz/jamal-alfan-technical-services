import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { BLOG_POSTS, getPost, getRelatedPosts } from "@/lib/blog";
import { articleJsonLd, buildMetadata } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = parseLocale(raw);
  const post = getPost(slug);
  if (!post) {
    return {};
  }
  return buildMetadata({
    locale,
    title: post.seoTitle[locale],
    description: post.seoDescription[locale],
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt[locale],
    keywords: post.keywords[locale],
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  const locale = parseLocale(raw);
  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  const jsonLd = articleJsonLd(locale, post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticle locale={locale} post={post} relatedPosts={getRelatedPosts(post.slug)} />
    </>
  );
}

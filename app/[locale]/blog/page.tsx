import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { ContactCta } from "@/components/sections";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { BLOG_POSTS } from "@/lib/blog";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { KEYWORD_CLUSTERS, blogIndexJsonLd, buildMetadata } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.blogTitle,
    description: dict.meta.blogDescription,
    path: "/blog",
    keywords: KEYWORD_CLUSTERS.blog[locale],
  });
}

export default async function BlogIndexPage({ params }: PageProps) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  const jsonLd = blogIndexJsonLd(locale);
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title={dict.blog.pageTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.blog.eyebrow },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={dict.blog.eyebrow}
            title={
              <>
                {dict.blog.titleBefore}{" "}
                <span className="text-brand-accent">{dict.blog.titleAccent}</span>
              </>
            }
            body={dict.blog.body}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCta locale={locale} />
    </>
  );
}

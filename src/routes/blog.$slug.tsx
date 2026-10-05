import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, CTABand, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { findPost, relatedPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { metaTitle: post.metaTitle, description: post.description, date: post.date };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | OsvaraX" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `/blog/${params.slug}`;
    return {
      links: [{ rel: "canonical", href: url }],
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  errorComponent: () => <Missing />,
  notFoundComponent: () => <Missing />,
  component: BlogPostPage,
});

function Missing() {
  return (
    <Section className="text-center">
      <h1 className="text-3xl font-semibold">That article doesn't exist</h1>
      <p className="mt-4 text-muted-foreground">Read everything else on the blog instead.</p>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="brand">
          <Link to="/blog">All articles</Link>
        </Button>
      </div>
    </Section>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Turns "/packages/ai-services/ai-chatbot-development" into typed Link params. */
function gigParams(path: string) {
  const [, , category, gig] = path.split("/");
  return category && gig ? { category, gig } : null;
}

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = findPost(slug);
  if (!post) return <Missing />;

  const related = relatedPosts(slug);
  const linkParams = gigParams(post.gigPath);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: "en",
    author: { "@type": "Organization", name: "OsvaraX" },
    publisher: { "@type": "Organization", name: "OsvaraX" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative overflow-hidden border-b border-border bg-surface/60">
        <div className="wash -left-40 -top-56 size-[36rem]" />
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="animate-rise">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="size-4" /> All articles
            </Link>
            <div className="mt-6">
              <Eyebrow>{post.category}</Eyebrow>
            </div>
            <h1 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {formatDate(post.date)} · {post.readTime}
            </p>
          </div>
        </div>
      </div>

      <Section className="!max-w-3xl">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/90">{post.intro}</p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {post.sections.map((section) => (
            <Reveal key={section.heading} as="section" className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 28)} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="grid gap-2.5 pt-1">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-foreground/85">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="panel mt-14 p-7">
          <p className="leading-relaxed text-foreground/90">{post.closing}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {linkParams && (
              <Button asChild variant="brand">
                <Link to="/packages/$category/$gig" params={linkParams}>
                  {post.gigLabel} <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
            <Button asChild variant="subtle">
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      {related.length > 0 && (
        <Section className="!pt-0">
          <h2 className="text-2xl font-semibold">Keep reading</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="panel lift flex h-full flex-col p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {r.category}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}

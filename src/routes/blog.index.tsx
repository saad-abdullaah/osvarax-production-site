import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, CTABand } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/blog" }],
    meta: [
      { title: "Digital Growth Blog | Web, SEO and Marketing | OsvaraX" },
      {
        name: "description",
        content:
          "Practical guides on web development, SEO, marketing and automation, written by the OsvaraX team from real client work.",
      },
      { property: "og:title", content: "OsvaraX Blog" },
      {
        property: "og:description",
        content: "Straight-talking guides on web development, SEO, marketing and automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the build, not the brochure"
        description="Pricing breakdowns, technical trade-offs and the questions clients actually ask us, written up so you can make a decision without booking a call first."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60} className="h-full">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="panel lift flex h-full flex-col p-7"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
                  <span>
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                  <ArrowRight className="size-4 text-brand" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Want this applied to your business?"
        description="Tell us the goal and we'll tell you what we'd build, what it costs and how long it takes."
      />
    </>
  );
}

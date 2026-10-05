import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame } from "lucide-react";
import { PageHero, Section, CTABand, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { categories, trendingCategory, trendingGigs } from "@/lib/packages";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/packages" }],
    meta: [
      { title: "Packages and Pricing | Web, SEO and Marketing | OsvaraX" },
      {
        name: "description",
        content:
          "Browse OsvaraX packages for web development, SEO, marketing, design and business automation, with clear starting prices.",
      },
      { property: "og:title", content: "OsvaraX Packages & Pricing" },
      {
        property: "og:description",
        content:
          "Every OsvaraX service grouped by category, with scope, package tiers and starting prices.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/packages" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesIndex,
});

function PackagesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Packages & pricing"
        title="Every service, with the price attached"
        description="Categories, scope and package tiers laid out in the open. Pick the area you need and open the service for what's included, who it suits and what it costs to start."
      />

      <Section>
        <Reveal className="panel lift flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>
              <Flame className="size-3.5" /> Trending
            </Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{trendingCategory.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {trendingCategory.description}
            </p>
          </div>
          <Button asChild variant="brand" size="lg" className="shrink-0">
            <Link to="/packages/$category" params={{ category: trendingCategory.slug }}>
              See trending <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 70} className="h-full">
              <article className="panel lift flex h-full flex-col p-7">
                <span aria-hidden="true" className="text-2xl">
                  {category.emoji}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-foreground/85">
                  {category.gigs.slice(0, 4).map((gig) => (
                    <li key={gig.slug} className="flex items-center justify-between gap-3">
                      <span className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        {gig.name}
                      </span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        from {gig.startingPrice}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Button asChild variant="subtle">
                    <Link to="/packages/$category" params={{ category: category.slug }}>
                      Open {category.name} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20">
          <Reveal>
            <Eyebrow>Most requested</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              What clients start with most often
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trendingGigs.map(({ gig, category }, i) => (
              <Reveal key={gig.slug} delay={i * 70} className="h-full">
                <Link
                  to="/packages/$category/$gig"
                  params={{ category: category.slug, gig: gig.slug }}
                  className="panel lift flex h-full flex-col p-6"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {category.name}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{gig.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {gig.summary}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-brand">
                    From {gig.startingPrice}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      <CTABand />
    </>
  );
}

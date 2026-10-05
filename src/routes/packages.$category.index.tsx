import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, CTABand, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { categories, findCategory, trendingCategory, trendingGigs } from "@/lib/packages";

export const Route = createFileRoute("/packages/$category/")({
  loader: ({ params }) => {
    if (params.category === trendingCategory.slug) {
      return {
        name: trendingCategory.name,
        metaTitle: trendingCategory.metaTitle,
        metaDescription: trendingCategory.metaDescription,
      };
    }
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return {
      name: category.name,
      metaTitle: category.metaTitle,
      metaDescription: category.metaDescription,
    };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found | OsvaraX" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `/packages/${params.category}`;
    return {
      links: [{ rel: "canonical", href: url }],
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  errorComponent: () => <Missing />,
  notFoundComponent: () => <Missing />,
  component: CategoryPage,
});

function Missing() {
  return (
    <Section className="text-center">
      <h1 className="text-3xl font-semibold">That category doesn't exist</h1>
      <p className="mt-4 text-muted-foreground">Browse every package instead.</p>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="brand">
          <Link to="/packages">All packages</Link>
        </Button>
      </div>
    </Section>
  );
}

function CategoryPage() {
  const { category: slug } = Route.useParams();
  const isTrending = slug === trendingCategory.slug;
  const category = findCategory(slug);
  if (!isTrending && !category) return <Missing />;

  const header = isTrending ? trendingCategory : category!;
  const entries = isTrending
    ? trendingGigs
    : category!.gigs.map((gig) => ({ gig, category: category! }));

  return (
    <>
      <div className="relative overflow-hidden border-b border-border bg-surface/60">
        <div className="wash -left-40 -top-56 size-[36rem]" />
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="animate-rise">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="size-4" /> All packages
            </Link>
            <div className="mt-6">
              <Eyebrow>
                <span aria-hidden="true">{header.emoji}</span> {header.name}
              </Eyebrow>
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl">
              {header.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {header.description}
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {entries.map(({ gig, category: parent }, i) => (
            <Reveal key={`${parent.slug}-${gig.slug}`} delay={i * 60} className="h-full">
              <article className="panel lift flex h-full flex-col p-7">
                {isTrending && (
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {parent.name}
                  </span>
                )}
                <h2 className="mt-3 text-lg font-semibold">{gig.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{gig.summary}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-brand">
                    From {gig.startingPrice}
                  </span>
                  {gig.launchPrice && (
                    <span className="text-xs text-muted-foreground">
                      launch price {gig.launchPrice}
                    </span>
                  )}
                </div>
                <div className="mt-auto pt-6">
                  <Button asChild variant="subtle" size="sm">
                    <Link
                      to="/packages/$category/$gig"
                      params={{ category: parent.slug, gig: gig.slug }}
                    >
                      View details <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!isTrending && (
          <div className="mt-14 flex flex-wrap gap-2.5">
            {categories
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to="/packages/$category"
                  params={{ category: c.slug }}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                >
                  {c.emoji} {c.name}
                </Link>
              ))}
          </div>
        )}
      </Section>

      <CTABand />
    </>
  );
}

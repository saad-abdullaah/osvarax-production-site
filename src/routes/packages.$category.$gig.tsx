import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { Section, CTABand, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { findGig } from "@/lib/packages";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/packages/$category/$gig")({
  loader: ({ params }) => {
    const found = findGig(params.category, params.gig);
    if (!found?.gig) throw notFound();
    return { metaTitle: found.gig.metaTitle, metaDescription: found.gig.metaDescription };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | OsvaraX" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `/packages/${params.category}/${params.gig}`;
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
  component: GigPage,
});

function Missing() {
  return (
    <Section className="text-center">
      <h1 className="text-3xl font-semibold">We don't offer that one (yet)</h1>
      <p className="mt-4 text-muted-foreground">Browse every package instead.</p>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="brand">
          <Link to="/packages">All packages</Link>
        </Button>
      </div>
    </Section>
  );
}

function GigPage() {
  const params = Route.useParams();
  const found = findGig(params.category, params.gig);
  if (!found?.gig) return <Missing />;
  const { category, gig } = found;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gig.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const related = category.gigs.filter((g) => g.slug !== gig.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative overflow-hidden border-b border-border bg-surface/60">
        <div className="wash -left-40 -top-56 size-[36rem]" />
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="animate-rise">
            <Link
              to="/packages/$category"
              params={{ category: category.slug }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="size-4" /> {category.name}
            </Link>
            <div className="mt-6">
              <Eyebrow>
                <span aria-hidden="true">{category.emoji}</span> {category.name}
              </Eyebrow>
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl">
              {gig.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {gig.valueProp}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full border border-border bg-card px-4 py-2 font-semibold text-brand">
                From {gig.startingPrice}
              </span>
              {gig.launchPrice && (
                <span className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground">
                  Launch price {gig.launchPrice}
                </span>
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/contact">
                  Start a project <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="subtle" size="lg">
                <a href={`tel:${CONTACT.phoneRaw}`}>
                  <Phone className="size-4" /> {CONTACT.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <Reveal className="space-y-5">
            <h2 className="text-2xl font-semibold sm:text-3xl">Who this is for</h2>
            <ul className="grid gap-2.5 pt-1">
              {gig.audience.map((a) => (
                <li key={a} className="flex gap-2.5 text-sm text-foreground/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground">{gig.summary}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="panel p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                {gig.included.map((it) => (
                  <li key={it} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-primary-foreground">
                      <Check className="size-3" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <Button asChild variant="brand" className="mt-8 w-full">
                <Link to="/contact">Get a scoped quote</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {gig.tiers && (
        <div className="border-y border-border bg-surface/60">
          <Section className="!py-20 sm:!py-24">
            <Reveal>
              <Eyebrow>Packages</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Pick the package that matches your stage
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {gig.tiers.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 80} className="h-full">
                  <div
                    className={`panel lift flex h-full flex-col p-7 ${
                      tier.popular ? "ring-1 ring-brand/40" : ""
                    }`}
                  >
                    {tier.popular && (
                      <span className="mb-4 w-fit rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Most popular
                      </span>
                    )}
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <p className="mt-2 font-display text-3xl font-semibold text-gradient">
                      {tier.price}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tier.blurb}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-foreground/85">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-7">
                      <Button asChild variant={tier.popular ? "brand" : "subtle"} className="w-full">
                        <Link to="/contact">Choose {tier.name}</Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>
        </div>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              {gig.name} questions, answered
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still unsure? Ask us directly, we answer scoping questions before anyone signs
              anything.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {gig.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="!pt-0">
          <h2 className="text-2xl font-semibold">More in {category.name}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/packages/$category/$gig"
                params={{ category: category.slug, gig: r.slug }}
                className="panel lift flex h-full flex-col p-6"
              >
                <h3 className="text-base font-semibold">{r.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-brand">
                  From {r.startingPrice}
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABand />
    </>
  );
}

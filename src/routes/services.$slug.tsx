import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { Section, Eyebrow, CTABand } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES } from "@/lib/services";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    const detail = SERVICE_DETAILS[params.slug];
    if (!service || !detail) throw notFound();
    return { title: service.title, summary: service.summary, headline: detail.headline };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | OsvaraX" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = `/services/${params.slug}`;
    const title = `${loaderData.title} | OsvaraX`;
    return {
      links: [{ rel: "canonical", href: url }],
      meta: [
        { title },
        { name: "description", content: loaderData.summary.slice(0, 155) },
        { property: "og:title", content: loaderData.headline },
        { property: "og:description", content: loaderData.summary.slice(0, 155) },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  errorComponent: () => <Missing />,
  notFoundComponent: () => <Missing />,
  component: ServiceDetailPage,
});

function Missing() {
  return (
    <Section className="text-center">
      <h1 className="text-3xl font-semibold">We don't offer that one (yet)</h1>
      <p className="mt-4 text-muted-foreground">
        The service you're looking for doesn't exist. Browse everything we do instead.
      </p>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="brand">
          <Link to="/services">All services</Link>
        </Button>
      </div>
    </Section>
  );
}

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const detail = SERVICE_DETAILS[slug];
  if (!service || !detail) return <Missing />;

  const related = SERVICES.filter((s) => s.category === service.category && s.slug !== slug).slice(
    0,
    3,
  );
  const Icon = service.icon;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border bg-surface/60">
        <div className="wash -left-40 -top-56 size-[36rem]" />
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="animate-rise">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="size-4" /> All services
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <Eyebrow>{service.category}</Eyebrow>
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl">
              {detail.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
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

      {/* Intro + deliverables */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <Reveal className="space-y-5">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {service.title} that earns its place in the budget
            </h2>
            {detail.intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <ul className="grid gap-2.5 pt-2 sm:grid-cols-2">
              {service.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-foreground/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="panel p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                {detail.deliverables.map((it) => (
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

      {/* Benefits */}
      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-24">
          <Reveal>
            <Eyebrow>Why it works</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              What you actually get out of it
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {detail.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="h-full">
                <div className="panel lift h-full p-7">
                  <span className="font-display text-2xl font-semibold text-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              {service.title} questions, answered
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still unsure? Message us on WhatsApp and get a straight answer today.
            </p>
            <Button asChild variant="subtle" className="mt-6">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </Reveal>
          <Reveal delay={80}>
            <Accordion type="single" collapsible>
              {detail.faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-border bg-surface/60">
          <Section className="!py-20">
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">Related services</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 70} className="h-full">
                  <Link
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="panel lift group block h-full p-7"
                  >
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                      <r.icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {r.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                      Learn more <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Section>
        </div>
      )}

      <CTABand />
    </>
  );
}

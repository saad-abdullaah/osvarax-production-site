import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, Section, SectionHeading, CTABand } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/services" }],
    meta: [
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Digital Services | Web, SEO, Marketing and Branding | OsvaraX" },
      {
        name: "description",
        content:
          "Web development, SEO, Google and Meta ads, e-commerce, branding, UX and automation delivered by one experienced OsvaraX team.",
      },
      { property: "og:title", content: "Digital Services | Web, SEO, Marketing and Branding" },
      {
        property: "og:description",
        content:
          "Services across marketing, web, branding and automation, delivered by one experienced team with clear goals and honest reporting.",
      },
    ],
  }),
  component: Services,
});

const promises = [
  "Clear KPIs, with quick wins while we chip away at the bigger ones",
  "Every campaign and page A/B tested, never set-and-forget",
  "One strategy across departments, leads, growth and brand pulling together",
  "Constant communication on progress, wins and the setbacks too",
];

const packages = [
  {
    name: "Launch",
    price: "$2,500+",
    for: "New brands that need to exist properly",
    items: [
      "5 to 8 page custom website",
      "On-page SEO setup",
      "Analytics + conversion tracking",
      "30-day post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "$5,900+",
    for: "Teams with traffic that isn't converting",
    items: [
      "Everything in Launch",
      "Monthly SEO + content programme",
      "Google & Meta ads management",
      "CRO testing programme",
    ],
    featured: true,
  },
  {
    name: "AI Scale",
    price: "Custom",
    for: "Companies drowning in inbound",
    items: [
      "Everything in Growth",
      "AI chatbot deployment",
      "AI calling agent fleet",
      "CRM automation + reporting",
    ],
  },
];

const process = [
  { step: "01", title: "Discovery", body: "We learn your business, customers and numbers before proposing anything." },
  { step: "02", title: "Strategy", body: "A scoped plan with KPIs, timeline and a fixed price | no open-ended retainers." },
  { step: "03", title: "Build & launch", body: "Design, development and campaign setup, shipped in reviewable increments." },
  { step: "04", title: "Optimise", body: "Testing, reporting and iteration every month so results compound." },
];

const faqs = [
  {
    q: "How long does a website take?",
    a: "A focused marketing site typically ships in 3 to 5 weeks. Larger platforms, stores and web apps run 8 to 14 weeks depending on integrations. You get a fixed timeline before we start.",
  },
  {
    q: "Do you work on a retainer or per project?",
    a: "Both. Web builds are fixed-scope projects. SEO, paid media and AI agent operations run as monthly retainers because they compound with iteration.",
  },
  {
    q: "Who owns the code and the accounts?",
    a: "You do, always. Repositories, ad accounts, analytics and agent configurations are created under your ownership from day one.",
  },
  {
    q: "Can you take over an existing site or campaign?",
    a: "Yes. We start with an audit, stabilise what's working, and rebuild only what's holding results back.",
  },
  {
    q: "How do you report on results?",
    a: "A live dashboard plus a monthly written review covering what moved, what didn't and what we're changing next month.",
  },
];

function Services() {
  const [active, setActive] = useState<string>("All");
  const filters = useMemo(() => ["All", ...SERVICE_CATEGORIES], []);
  const visible = useMemo(
    () => (active === "All" ? SERVICES : SERVICES.filter((s) => s.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to be found, believed and booked"
        description="Marketing, web, branding and AI under one roof. We blend the personal approach of a consultant with the firepower of a full-service agency, and we report honestly on all of it."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Your strategic partner"
              title="We provide the guidance you need to grow"
              description="Our team is dedicated to understanding your business, your customers and your goals before a single line of code or a single ad goes live. Honest work, real results."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="panel space-y-4 p-8">
              {promises.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-28">
          <SectionHeading
            eyebrow="What we do"
            title="A service for every stage of growth"
            description="Pick a discipline, or let us assemble the mix that fits your goals and budget."
            align="center"
          />

          <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === f
                    ? "border-transparent bg-brand-gradient text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70} className="h-full">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="panel lift group flex h-full flex-col p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                      <s.icon className="size-5" />
                    </span>
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-foreground/80">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-brand">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex justify-center">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Book a strategy session <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </Section>
      </div>

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="A process built for momentum"
          align="center"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 80} className="h-full">
              <div className="panel lift h-full p-7">
                <span className="font-display text-3xl font-semibold text-gradient">{p.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-28">
          <SectionHeading
            eyebrow="Engagements"
            title="Transparent starting points"
            description="Every quote is scoped to your goals, these are the shapes most engagements take."
            align="center"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className="h-full">
                <div
                  className={`panel lift relative h-full p-8 ${p.featured ? "border-brand/40" : ""}`}
                >
                  {p.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-brand-gradient px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-4 font-display text-4xl font-semibold text-gradient">{p.price}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{p.for}</p>
                  <ul className="mt-7 space-y-3 border-t border-border pt-6 text-sm text-foreground/80">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions we get every week" />
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {faqs.map((f) => (
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
      </Section>

      <CTABand />
    </>
  );
}

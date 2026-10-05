import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  PhoneCall,
  Code2,
  Search,
  Megaphone,
  Workflow,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow, CTABand } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { InteractiveGrid } from "@/components/site/InteractiveGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "OsvaraX | Web Development, SEO and Digital Growth" },
      {
        name: "description",
        content:
          "OsvaraX builds fast websites, improves search visibility and creates practical digital systems for growing businesses.",
      },
      { property: "og:title", content: "OsvaraX | Web Development, SEO and Digital Growth" },
      {
        property: "og:description",
        content:
          "One experienced team for web development, SEO, digital marketing and business automation.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Code2,
    title: "Web Development",
    body: "Custom, fast websites and web apps in React, Next.js and TypeScript, built to convert and easy to maintain.",
  },
  {
    icon: Search,
    title: "SEO",
    body: "Technical audits, content architecture, schema and link equity. We chase revenue keywords, not vanity traffic.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    body: "Paid search, paid social and lifecycle email run on a single dashboard with honest attribution.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    body: "Support and sales assistants trained on your docs, wired to your CRM, live on site, WhatsApp and Instagram.",
  },
  {
    icon: PhoneCall,
    title: "AI Calling Agents",
    body: "Human-sounding voice agents that qualify leads, book appointments and follow up 24/7 in multiple languages.",
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "We connect the tools you already pay for so quotes, invoices and handoffs stop living in someone's inbox.",
  },
];

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "38%", label: "Avg. organic lift in 6 mo." },
  { value: "5", label: "Markets served" },
  { value: "24/7", label: "Digital availability" },
];

const process = [
  {
    step: "01",
    title: "Discover",
    body: "A working session to map the funnel, the tech and the fastest path to measurable impact.",
  },
  {
    step: "02",
    title: "Architect",
    body: "Scope, wireframes, data model and workflow planning, all agreed before work begins.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demo builds in your staging environment. You see progress every Friday.",
  },
  {
    step: "04",
    title: "Scale",
    body: "Launch, then iterate on real numbers: rankings, CAC, booked calls, resolved tickets.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "OpenAI",
  "Twilio",
  "LangChain",
  "AWS",
  "Vercel",
  "HubSpot",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface/50">
        <InteractiveGrid />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-14">
          <div className="max-w-5xl animate-rise">
            <Eyebrow>Web · SEO · Marketing · Automation</Eyebrow>
            <h1 className="mt-7 max-w-4xl text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
              We build digital <span className="text-gradient">growth systems</span> that turn
              attention into business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              OsvaraX brings web development, search, marketing and customer automation together,
              so every part of your digital presence supports the same goal.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl">
                <Link to="/contact" preload="intent">
                  Book a free strategy call <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <Link to="/ai-solutions" preload="intent">
                  Explore AI solutions
                </Link>
              </Button>
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} className="bg-background px-6 py-7">
                <dt className="font-display text-3xl font-semibold text-gradient">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b border-border bg-background py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...stack, ...stack].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm uppercase tracking-[0.2em] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Six capabilities. <span className="text-gradient">One accountable team.</span>
            </>
          }
            description="No handoffs between agencies. Strategy, engineering and marketing stay under one roof, so the work connects from the first idea to launch."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} className="h-full">
              <article className="panel group h-full p-7">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild variant="subtle" size="lg">
            <Link to="/services" preload="intent">
              All services in detail <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-24">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Built for businesses that value <span className="text-gradient">useful results</span></>}
            description="See how we turn business requirements into clear, reliable digital experiences."
          />
          <div className="mt-12">
            <ProjectShowcase />
          </div>
        </Section>
      </div>

      {/* Automation spotlight */}
      <div className="border-b border-border bg-background">
        <Section className="!py-20 sm:!py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Customer automation"
                title={
                  <>
                    AI chatbots and calling agents that{" "}
                    <span className="text-gradient">close the loop</span>
                  </>
                }
                description="Fast replies matter. Our chat and calling systems answer common questions, qualify enquiries, book meetings and keep your customer records up to date."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Trained on your product docs, pricing and objection handling",
                  "Natural voice with sub-second latency and live call transfer",
                  "Multilingual, 24/7, and never asks for a day off",
                  "Full transcripts, sentiment and hand-off rules you control",
                ].map((f, i) => (
                  <Reveal key={f} delay={i * 60} as="li" className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    {f}
                  </Reveal>
                ))}
              </ul>
              <Button asChild variant="brand" size="lg" className="mt-9">
                <Link to="/ai-solutions" preload="intent">
                  See how the agents work <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <Reveal delay={100}>
              <div className="panel relative overflow-hidden p-8">
                <div className="wash -right-24 -top-24 size-[26rem]" />
                <div className="relative space-y-4">
                  <ChatBubble side="user">Hi, do you handle SEO and a chatbot together?</ChatBubble>
                  <ChatBubble side="agent">
                    We do. One team handles the site, the SEO programme and the assistant. Want me to
                    book 20 minutes with a strategist?
                  </ChatBubble>
                  <ChatBubble side="user">Yes, Thursday morning works.</ChatBubble>
                  <ChatBubble side="agent">
                    Booked for Thursday 10:15. Confirmation sent and your CRM record is updated.
                  </ChatBubble>
                </div>
                <div className="relative mt-8 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                  <Sparkles className="size-4 text-brand" />
                  <span className="text-xs text-muted-foreground">
                    Avg. first response: <strong className="text-foreground">0.8s</strong>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* Process */}
      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="A process built for shipping, not for slide decks"
          align="center"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 80} className="h-full">
              <div className="panel h-full p-7">
                <span className="font-display text-sm font-semibold tracking-widest text-brand">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}

function ChatBubble({ side, children }: { side: "user" | "agent"; children: React.ReactNode }) {
  const isAgent = side === "agent";
  return (
    <div className={isAgent ? "flex justify-start" : "flex justify-end"}>
      <p
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAgent
            ? "bg-brand-gradient text-primary-foreground"
            : "border border-border bg-surface text-foreground"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  PhoneCall,
  MessageSquare,
  Brain,
  ShieldCheck,
  Languages,
  Clock,
  ArrowRight,
  PhoneForwarded,
  CalendarCheck,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading, CTABand } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    links: [{ rel: "canonical", href: "/ai-solutions" }],
    meta: [
      { property: "og:url", content: "/ai-solutions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "AI Chatbots & AI Calling Agents | OsvaraX" },
      {
        name: "description",
        content:
          "Deploy AI chatbots and human-sounding AI calling agents that qualify leads, book appointments and resolve support tickets 24/7, integrated with your CRM.",
      },
      { property: "og:title", content: "AI Chatbots & AI Calling Agents" },
      {
        property: "og:description",
        content:
          "Voice and chat agents that answer instantly, qualify leads and book meetings around the clock.",
      },
    ],
  }),
  component: AISolutions,
});

const chatFeatures = [
  {
    icon: Brain,
    title: "Trained on your knowledge",
    body: "We ingest your docs, pricing, policies and past tickets so answers are accurate, not generic.",
  },
  {
    icon: MessageSquare,
    title: "Everywhere your customers are",
    body: "Website widget, WhatsApp, Instagram, Messenger and in-app, one brain, every channel.",
  },
  {
    icon: Database,
    title: "Wired into your systems",
    body: "Creates CRM records, checks order status, books calendar slots and escalates to humans cleanly.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrailed",
    body: "Scope limits, profanity and PII filters, and full transcript logging for compliance review.",
  },
];

const voiceFeatures = [
  {
    icon: PhoneCall,
    title: "Inbound reception",
    body: "Answers on the first ring, understands intent, and routes or resolves without hold music.",
  },
  {
    icon: PhoneForwarded,
    title: "Outbound qualification",
    body: "Dials new leads within seconds of a form fill, qualifies with your script, and logs the outcome.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment booking",
    body: "Reads live calendar availability, books, confirms by SMS and handles reschedules.",
  },
  {
    icon: Languages,
    title: "Multilingual voices",
    body: "Natural voices across English, Spanish, Hindi, Arabic and more, with accent selection.",
  },
];

const useCases = [
  { sector: "Real Estate", body: "Instant callback on every portal enquiry, viewings booked overnight." },
  { sector: "Healthcare", body: "Appointment scheduling, reminders and no-show recovery calls." },
  { sector: "E-commerce", body: "Order status, returns and product guidance without a support queue." },
  { sector: "Agencies", body: "Discovery-call qualification so your team only talks to real budget." },
  { sector: "Automotive", body: "Test-drive booking and service reminders across the whole database." },
  { sector: "Education", body: "Admissions Q&A and counsellor scheduling in the applicant's language." },
];

const steps = [
  { n: "01", t: "Map the conversation", b: "We script the flows, edge cases and escalation rules with your team." },
  { n: "02", t: "Train & connect", b: "Knowledge ingestion, voice selection, CRM and calendar integrations." },
  { n: "03", t: "Sandbox testing", b: "You call the agent yourself, we tune tone, latency and objection handling." },
  { n: "04", t: "Go live & optimise", b: "Weekly transcript reviews and prompt tuning against booked-meeting rate." },
];

function AISolutions() {
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="AI chatbots and calling agents that never miss a lead"
        description="Speed to lead decides who wins the deal. Our agents answer in under a second, on chat and on the phone, then qualify, book and log it all automatically."
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title={
                <>
                  78% of buyers choose the company that{" "}
                  <span className="text-gradient">replies first</span>
                </>
              }
              description="Your team sleeps. Your competitors' AI doesn't. We deploy agents that hold the line at 3am, during a campaign spike, and on public holidays, with transcripts you can audit every morning."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                { k: "0.8s", v: "Avg. response" },
                { k: "62%", v: "Tickets deflected" },
                { k: "3.4x", v: "More meetings booked" },
              ].map((s, i) => (
                <Reveal key={s.v} delay={i * 80}>
                  <div className="panel lift p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">{s.k}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="panel relative overflow-hidden p-8">
              <div className="wash -left-24 -top-24 size-[24rem]" />
              <div className="relative flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-gradient text-primary-foreground">
                  <PhoneCall className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Live call · OsvaraX Voice Agent</p>
                  <p className="text-xs text-muted-foreground">Connected · 00:42</p>
                </div>
              </div>
              <ol className="relative mt-7 space-y-4 text-sm">
                {[
                  "Caller intent detected: pricing enquiry",
                  "Budget and timeline qualified",
                  "Calendar checked, Thursday 10:15 offered",
                  "Meeting booked, CRM record created",
                ].map((line, i) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="text-foreground/85">
                      {line}
                      <span className="ml-2 text-xs text-muted-foreground">
                        0{i}:{String(9 + i * 7).padStart(2, "0")}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-28">
          <SectionHeading
            eyebrow="Two agents, one brain"
            title="Chat when they browse. Voice when it matters."
            align="center"
          />

          <Tabs defaultValue="chat" className="mt-12">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 bg-surface-2">
              <TabsTrigger value="chat" className="gap-2">
                <Bot className="size-4" /> AI Chatbots
              </TabsTrigger>
              <TabsTrigger value="voice" className="gap-2">
                <PhoneCall className="size-4" /> Calling Agents
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="mt-10">
              <FeatureGrid items={chatFeatures} />
            </TabsContent>
            <TabsContent value="voice" className="mt-10">
              <FeatureGrid items={voiceFeatures} />
            </TabsContent>
          </Tabs>
        </Section>
      </div>

      <Section>
        <SectionHeading eyebrow="Deployment" title="Live in weeks, not quarters" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="h-full">
              <div className="panel lift h-full p-7">
                <span className="font-display text-sm font-semibold tracking-widest text-brand">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-28">
          <SectionHeading eyebrow="Use cases" title="Where agents pay for themselves fastest" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <Reveal key={u.sector} delay={(i % 3) * 80} className="h-full">
                <div className="panel lift h-full p-7">
                  <div className="flex items-center gap-2 text-brand">
                    <Clock className="size-4" />
                    <h3 className="text-base font-semibold text-foreground">{u.sector}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact" preload="intent">
                Get a live agent demo <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Section>
      </div>

      <CTABand
        title="Hear your own AI agent on a real call"
        description="We'll configure a demo agent for your business and phone you with it. No slides, just the product."
      />
    </>
  );
}

function FeatureGrid({
  items,
}: {
  items: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((f, i) => (
        <Reveal key={f.title} delay={(i % 2) * 80} className="h-full">
          <article className="panel lift group h-full p-7">
            <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
              <f.icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

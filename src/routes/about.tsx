import { createFileRoute } from "@tanstack/react-router";
import { Target, Users, Zap, HeartHandshake, Globe2, LineChart, MessageCircle, Mail } from "lucide-react";
import { PageHero, Section, SectionHeading, CTABand } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [{ rel: "canonical", href: "/about" }],
    meta: [
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "About OsvaraX | Web, SEO and Marketing Team" },
      {
        name: "description",
        content:
          "OsvaraX is a practical digital studio combining web engineering, SEO and performance marketing under one accountable team.",
      },
      { property: "og:title", content: "About OsvaraX" },
      {
        property: "og:description",
        content:
          "An experienced team of engineers and marketers building growth systems for ambitious companies.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    body: "We measure ourselves on booked meetings, rankings and revenue, not on hours logged or decks delivered.",
  },
  {
    icon: Zap,
    title: "Ship weekly",
    body: "Every Friday you see working software in staging. Momentum is a feature, not a nice-to-have.",
  },
  {
    icon: Users,
    title: "Senior people only",
    body: "The person you meet in the kickoff is the person writing the code and tuning the agent prompts.",
  },
  {
    icon: HeartHandshake,
    title: "You own everything",
    body: "Code, accounts, data and agent configurations sit under your name from day one. No hostage situations.",
  },
  {
    icon: Globe2,
    title: "Built for scale",
    body: "Architecture decisions assume you'll grow 10x, because retrofitting scale is where budgets die.",
  },
  {
    icon: LineChart,
    title: "Honest reporting",
    body: "One dashboard, real attribution, and a monthly call where we say what didn't work too.",
  },
];

const timeline = [
  { year: "2019", t: "Two engineers, one repo", b: "Started as a two-person contract dev shop building custom sites." },
  { year: "2021", t: "Growth joins engineering", b: "Added SEO and paid media so builds shipped with demand behind them." },
  { year: "2023", t: "Applied AI practice", b: "First production chatbot and voice agent deployments for service businesses." },
  { year: "2026", t: "Full growth systems", b: "120+ projects delivered across six countries with an in-house AI team." },
];

const leadership = [
  {
    name: "Usman Irfan",
    role: "Founder & CEO",
    initials: "UI",
    bio: "Usman started OsvaraX with a simple belief: businesses deserve digital work that actually performs. He leads product and engineering, from architecture decisions to the last pixel, and stays personally involved in every client engagement.",
    focus: ["Web engineering", "Product strategy", "Client partnerships"],
  },
  {
    name: "Saad Abdullah",
    role: "Co-Founder & Head of Growth",
    initials: "SA",
    bio: "Saad makes sure what we build gets found and gets used. He runs SEO, performance marketing and our applied AI practice, turning traffic into conversations and conversations into booked revenue.",
    focus: ["SEO & marketing", "AI automation", "Analytics"],
  },
];

const team = [
  { name: "Usman Irfan", role: "Founder & CEO", initials: "UI" },
  { name: "Saad Abdullah", role: "Co-Founder & Head of Growth", initials: "SA" },
  { name: "Design Studio", role: "UI/UX & Brand", initials: "DS" },
  { name: "AI Engineering", role: "Chatbots & Voice Agents", initials: "AI" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A studio built the way we wished agencies worked"
        description="No account-manager telephone game, no junior bait-and-switch. Just a senior team that builds, markets and automates, and tells you the truth about results."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Our mission"
            title="Make world-class digital execution available to companies without a 50-person team"
          />
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Most businesses don't lose to better products. They lose to slower websites, weaker
              search visibility and leads that sit unanswered for six hours.
            </p>
            <p>
              OsvaraX exists to close that gap. We build the asset properly, put qualified
              demand in front of it, and then place AI agents on the front line so every enquiry
              gets an instant, competent response.
            </p>
            <p>
              We work with a deliberately small number of clients at a time. It keeps the work
              senior, the timelines real and the accountability obvious.
            </p>
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-28">
          <SectionHeading eyebrow="Values" title="How we operate" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80} className="h-full">
                <div className="panel lift group h-full p-7">
                  <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the founders"
          description="OsvaraX is founder-led. The two people below are in your kickoff call, in your project channel, and accountable for the result."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leadership.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full">
              <article className="panel lift h-full p-8 sm:p-10">
                <div className="flex items-center gap-5">
                  <span className="grid size-20 shrink-0 place-items-center rounded-2xl bg-brand-gradient font-display text-2xl font-semibold text-primary-foreground">
                    {p.initials}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand">{p.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex gap-2">
                  {/* <a
                    href={`mailto:${CONTACT.email}`}
                    aria-label={`Email ${p.name}`}
                    className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    <Mail className="size-4" />
                  </a>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Message ${p.name} on WhatsApp`}
                    className="grid size-9 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    <MessageCircle className="size-4" />
                  </a> */}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHeading eyebrow="Journey" title="How we got here" />
        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {timeline.map((t, i) => (
            <Reveal
              key={t.year}
              as="li"
              delay={i * 70}
              className="grid gap-2 bg-background px-7 py-7 sm:grid-cols-[7rem_1fr]"
            >
              <span className="font-display text-sm font-semibold tracking-widest text-brand">
                {t.year}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{t.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t.b}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-28">
          <SectionHeading eyebrow="Team" title="The people on your project" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80} className="h-full">
                <div className="panel lift h-full p-7 text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-gradient font-display text-lg font-semibold text-primary-foreground">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{m.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div> */}

      <CTABand title="Let's see if we're a fit" />
    </>
  );
}

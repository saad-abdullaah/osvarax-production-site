import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  MessageCircle,
  Loader2,
  Globe2,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, CONTACT_FORM_ENDPOINT } from "@/lib/contact";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [{ rel: "canonical", href: "/contact" }],
    meta: [
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact OsvaraX | Start Your Project" },
      {
        name: "description",
        content:
          "Tell us about your website, SEO, marketing or AI agent project. Email info@osvarax.com, WhatsApp us, or send a brief, we reply within one business day.",
      },
      { property: "og:title", content: "Contact OsvaraX" },
      {
        property: "og:description",
        content: "Start a web, SEO, marketing or AI agent project. Reply within one business day.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  // {
  //   icon: Phone,
  //   label: "Call us",
  //   value: CONTACT.phone,
  //   hint: "Mon to Sat, 9am to 7pm PKT",
  //   href: `tel:${CONTACT.phoneRaw}`,
  //   cta: "Call now",
  // },
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT.email,
    hint: "Detailed briefs welcome",
    href: `mailto:${CONTACT.email}`,
    cta: "Send an email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    hint: "Fastest way to reach the team",
    href: CONTACT.whatsappUrl,
    cta: "Open chat",
  },
];

const assurances = [
  { icon: Clock, title: "Reply within 1 business day", body: "Every serious enquiry gets a real, written response | never an autoresponder." },
  { icon: Globe2, title: "Remote-first, clients in 6 countries", body: "We work across time zones and keep a shared channel open for the whole engagement." },
  { icon: ShieldCheck, title: "You own everything", body: "Code, ad accounts, analytics and agent configs are created under your ownership." },
  { icon: CalendarCheck, title: "Free 30-minute strategy call", body: "No pitch deck. We look at your numbers and tell you what we'd do first." },
];

function Contact() {
  const [service, setService] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string, max: number) => String(fd.get(k) ?? "").trim().slice(0, max);
    const payload = {
      name: get("name", 100),
      email: get("email", 255),
      company: get("company", 120),
      phone: get("phone", 40),
      service: service || "Not specified",
      budget: get("budget", 60),
      message: get("message", 4000),
      _subject: `New project brief from ${get("name", 100) || "website"}`,
      _template: "table",
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in your name, email and project details.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      toast.success("Thanks, your brief is in.", {
        description: "We'll reply within one business day with next steps.",
      });
      form.reset();
      setService("");
    } catch {
      toast.error("Couldn't send your brief.", {
        description: `Please email ${CONTACT.email} or message us on WhatsApp.`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to grow"
        description="Share a few details and we'll come back with an honest read: what we'd do, how long it takes and what it costs."
      />

      <Section>
        <SectionHeading
          eyebrow="Get in touch"
          title="Two ways to reach us"
          description="Pick whichever is easiest, the same senior team answers all of them."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 80} className="h-full">
              <a
                href={c.href}
                {...(c.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="panel lift group flex h-full flex-col items-center p-8 text-center"
              >
                <span className="grid size-12 place-items-center rounded-2xl border border-border bg-surface-2 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{c.label}</h3>
                <p className="mt-2 break-all text-sm text-foreground/80">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.hint}</p>
                <span className="mt-5 text-sm font-medium text-brand">{c.cta} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-y border-border bg-surface/60">
        <Section className="!py-20 sm:!py-28">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
            <Reveal>
              <form onSubmit={onSubmit} className="panel p-8 sm:p-10">
                <h2 className="text-2xl font-semibold">Send a project brief</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  The more context you give, the sharper our first response will be.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name">
                    <Input id="name" name="name" required placeholder="" />
                  </Field>
                  <Field id="email" label="Work email">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field id="company" label="Company">
                    <Input id="company" name="company" placeholder="Company Ltd." />
                  </Field>
                  <Field id="phone" label="Phone (optional)">
                    <Input id="phone" name="phone" placeholder="+1 555 000 0000" />
                  </Field>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field id="service" label="What do you need?">
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="max-h-72">
                        {SERVICES.map((s) => (
                          <SelectItem key={s.slug} value={s.title}>
                            {s.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="Something else">Something else</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field id="budget" label="Budget range">
                    <Input id="budget" name="budget" placeholder="e.g. $5k, $15k" />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field id="message" label="Project details">
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="What are you building, what's blocking it, and when do you need it live?"
                    />
                  </Field>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" variant="brand" size="lg" disabled={sending}>
                    {sending ? (
                      <>
                        Sending… <Loader2 className="size-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send project brief <Send className="size-4" />
                      </>
                    )}
                  </Button>
                  <Button asChild variant="subtle" size="lg">
                    <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" /> WhatsApp us
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  We reply to every serious enquiry. No mailing list, no drip sequence.
                </p>
              </form>
            </Reveal>

            <Reveal delay={120} as="aside" className="space-y-5">
              <div className="panel p-8">
                <h2 className="text-lg font-semibold">What happens next</h2>
                <ol className="mt-6 space-y-5">
                  {[
                    "We read your brief and check what's already live.",
                    "You get a written response with our honest read and questions.",
                    "A 30-minute call to align on scope, timeline and budget.",
                    "A fixed proposal, no surprises once we start.",
                  ].map((t, i) => (
                    <li key={t} className="flex gap-4">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/80">{t}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="panel p-8">
                <h2 className="text-lg font-semibold">Want the AI demo instead?</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Mention “agent demo” in your message and we'll configure a chatbot or calling agent
                  for your business, then let you test it live before any commitment.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {assurances.map((a, i) => (
            <Reveal key={a.title} delay={i * 70} className="h-full">
              <div className="panel h-full p-7">
                <span className="grid size-10 place-items-center rounded-xl border border-border bg-surface-2 text-brand">
                  <a.icon className="size-4" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

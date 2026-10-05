import { useNavigate } from "@tanstack/react-router";
import { Bot, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendChatLead } from "@/lib/chat-lead";
import { categories, findCategory, trendingCategory } from "@/lib/packages";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { announceWidgetOpen, onOtherWidgetOpen } from "@/lib/widget-bus";

type Choice = { label: string; action: () => void };
type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  tiers?: { name: string; price: string }[];
  link?: { label: string; to: string };
};

const GREETING =
  "Hi, I'm the OsvaraX assistant 👋 I can walk you through our services, share pricing, or get you booked in for a free call.";

function BrandAvatar({ className = "" }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid place-items-center rounded-full bg-brand-gradient text-primary-foreground",
        className,
      )}
    >
      <Bot className="size-4" />
    </span>
  );
}

export function ChatWidget() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [typing, setTyping] = useState(false);
  const [capture, setCapture] = useState<null | "name" | "contact">(null);
  const [lead, setLead] = useState({ name: "", contact: "" });
  const [draft, setDraft] = useState("");
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, choices]);

  useEffect(() => onOtherWidgetOpen("chat", () => setOpen(false)), []);
  useEffect(() => {
    if (open) announceWidgetOpen("chat");
  }, [open]);

  function push(msg: Omit<Message, "id">) {
    idRef.current += 1;
    setMessages((m) => [...m, { ...msg, id: idRef.current }]);
  }

  function botSay(items: Omit<Message, "id" | "from">[], next?: Choice[]) {
    setChoices([]);
    let delay = 0;
    items.forEach((item) => {
      const wait = Math.min(900, 320 + item.text.length * 8);
      timers.current.push(setTimeout(() => setTyping(true), delay));
      delay += wait;
      timers.current.push(
        setTimeout(() => {
          setTyping(false);
          push({ from: "bot", ...item });
        }, delay),
      );
      delay += 120;
    });
    if (next) timers.current.push(setTimeout(() => setChoices(next), delay));
  }

  const rootChoices = (): Choice[] => [
    { label: "See our services", action: showCategories },
    { label: "Get pricing", action: askPricingService },
    { label: "Book a free call", action: startBooking },
    { label: "Talk to a human", action: talkToHuman },
  ];

  function userSay(text: string) {
    push({ from: "user", text });
    setChoices([]);
  }

  function openChat() {
    setOpen(true);
    if (messages.length === 0) botSay([{ text: GREETING }], rootChoices());
  }

  function goTo(path: string, label: string) {
    userSay(label);
    setOpen(false);
    void navigate({ to: path });
  }

  function showCategories() {
    userSay("See our services");
    botSay(
      [{ text: "Here's what we do. Pick a category and I'll show you the services inside it." }],
      [
        ...categories.map((c) => ({
          label: `${c.emoji} ${c.name}`,
          action: () => showGigs(c.slug),
        })),
        {
          label: "🔥 Trending",
          action: () => goTo(`/packages/${trendingCategory.slug}`, "Trending"),
        },
        { label: "← Back", action: backToStart },
      ],
    );
  }

  function showGigs(slug: string) {
    const category = findCategory(slug);
    if (!category) return;
    userSay(category.name);
    botSay(
      [{ text: `${category.description} Which one would you like to know more about?` }],
      [
        ...category.gigs.map((g) => ({
          label: g.name,
          action: () => {
            userSay(g.name);
            botSay(
              [
                { text: `${g.name}, ${g.summary}` },
                {
                  text: `Starting from ${g.startingPrice}${g.launchPrice ? ` (launch price ${g.launchPrice})` : ""}.`,
                  link: { label: `Open the ${g.name} page`, to: `/packages/${slug}/${g.slug}` },
                },
              ],
              [
                { label: "See pricing tiers", action: () => showPricing(slug, g.slug) },
                { label: "Book a free call", action: startBooking },
                { label: "← Back to services", action: showCategories },
              ],
            );
          },
        })),
        { label: "← Back", action: showCategories },
      ],
    );
  }

  function askPricingService() {
    userSay("Get pricing");
    botSay(
      [{ text: "Sure, which service are you pricing?" }],
      [
        ...categories.flatMap((c) =>
          c.gigs
            .filter((g) => g.tiers)
            .map((g) => ({ label: g.name, action: () => showPricing(c.slug, g.slug) })),
        ),
        { label: "Something else", action: () => showCategories() },
      ],
    );
  }

  function showPricing(categorySlug: string, gigSlug: string) {
    const category = findCategory(categorySlug);
    const gig = category?.gigs.find((g) => g.slug === gigSlug);
    if (!gig) return;
    userSay(`${gig.name} pricing`);
    if (gig.tiers) {
      botSay(
        [
          {
            text: `${gig.name} packages:`,
            tiers: gig.tiers.map((t) => ({ name: t.name, price: t.price })),
            link: { label: "See what's included", to: `/packages/${categorySlug}/${gigSlug}` },
          },
        ],
        [
          { label: "Book a free call", action: startBooking },
          { label: "Talk to a human", action: talkToHuman },
          { label: "← Back", action: backToStart },
        ],
      );
    } else {
      botSay(
        [
          {
            text: `${gig.name} starts from ${gig.startingPrice}. Exact scope is quoted after a quick call.`,
            link: { label: "Open the service page", to: `/packages/${categorySlug}/${gigSlug}` },
          },
        ],
        [
          { label: "Book a free call", action: startBooking },
          { label: "← Back", action: backToStart },
        ],
      );
    }
  }

  function startBooking() {
    userSay("Book a free call");
    botSay([{ text: "Great. What's your name?" }]);
    setCapture("name");
  }

  function talkToHuman() {
    userSay("Talk to a human");
    botSay(
      [
        {
          text: `You'll get a real person on WhatsApp at ${site.whatsapp.pk.display}, usually within a few hours.`,
        },
      ],
      [
        {
          label: "Open WhatsApp",
          action: () => {
            window.open(
              waLink("Hi OsvaraX, I'd like to speak with someone about a project."),
              "_blank",
            );
          },
        },
        { label: "← Back", action: backToStart },
      ],
    );
  }

  function backToStart() {
    userSay("Back to the start");
    botSay([{ text: "No problem, what would you like to do?" }], rootChoices());
  }

  function submitCapture(e: React.FormEvent) {
    e.preventDefault();
    const value = draft.trim();
    if (!value) return;
    setDraft("");
    userSay(value);
    if (capture === "name") {
      setLead((l) => ({ ...l, name: value }));
      setCapture("contact");
      botSay([
        { text: `Thanks ${value}. What's the best WhatsApp number or email to reach you on?` },
      ]);
      return;
    }
    const finalLead = { ...lead, contact: value };
    setLead(finalLead);
    setCapture(null);
    void sendChatLead({ name: finalLead.name || "Not provided", contact: value });
    botSay(
      [
        {
          text: "Perfect, that's with our team. Send it through on WhatsApp too and we'll confirm a 15-minute slot, no pressure and no pitch deck.",
        },
      ],
      [
        {
          label: "Send on WhatsApp",
          action: () =>
            window.open(
              waLink(
                `Hi OsvaraX, I'd like to book a free discovery call.\nName: ${finalLead.name}\nContact: ${finalLead.contact}`,
              ),
              "_blank",
            ),
        },
        { label: "← Back", action: backToStart },
      ],
    );
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open the OsvaraX assistant"
          className="glow-brand fixed right-6 bottom-24 z-40 grid size-14 place-items-center rounded-full border border-border bg-card transition-transform hover:scale-105"
        >
          <span
            className="pulse-ring absolute inset-0 rounded-full bg-brand/25"
            aria-hidden="true"
          />
          <BrandAvatar className="relative size-9" />
        </button>
      )}

      <div
        className={cn(
          "fixed right-4 bottom-4 z-50 flex w-[min(24rem,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.2,0.9,0.3,1.2)" }}
        role="dialog"
        aria-label="OsvaraX assistant"
      >
        <div className="flex items-center justify-between gap-2 border-b border-border bg-surface/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <BrandAvatar className="size-8" />
            <div>
              <p className="text-sm font-semibold">OsvaraX Assistant</p>
              <p className="text-xs text-muted-foreground">Usually replies instantly</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close chat">
            <X className="size-4" />
          </Button>
        </div>

        <div
          ref={scrollRef}
          className="flex max-h-[55vh] min-h-[16rem] flex-col gap-2.5 overflow-y-auto p-4"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "msg-rise max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm",
                m.from === "bot"
                  ? "self-start bg-muted text-foreground"
                  : "self-end bg-primary text-primary-foreground",
              )}
            >
              <p className="whitespace-pre-line">{m.text}</p>
              {m.tiers && (
                <ul className="mt-2 grid gap-1.5">
                  {m.tiers.map((t) => (
                    <li
                      key={t.name}
                      className="flex items-center justify-between rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs"
                    >
                      <span className="font-medium">{t.name}</span>
                      <span className="text-brand">{t.price}</span>
                    </li>
                  ))}
                </ul>
              )}
              {m.link && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => {
                    setOpen(false);
                    if (m.link) void navigate({ to: m.link.to });
                  }}
                  className="mt-1 h-auto px-0 text-xs font-semibold text-brand underline underline-offset-4"
                >
                  {m.link.label} →
                </Button>
              )}
            </div>
          ))}
          {typing && (
            <div className="msg-rise flex gap-1 self-start rounded-2xl bg-muted px-3.5 py-3">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-1.5 animate-bounce rounded-full bg-muted-foreground"
                  style={{ animationDelay: `${i * 120}ms` }}
                />
              ))}
            </div>
          )}
        </div>

        {capture ? (
          <form onSubmit={submitCapture} className="flex gap-2 border-t border-border p-3">
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={capture === "name" ? "Your name" : "WhatsApp number or email"}
              aria-label={capture === "name" ? "Your name" : "Your WhatsApp number or email"}
              autoFocus
            />
            <Button type="submit" size="icon" aria-label="Send">
              <Send className="size-4" />
            </Button>
          </form>
        ) : (
          choices.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-border p-3">
              {choices.map((c) => (
                <Button
                  variant="outline"
                  size="sm"
                  key={c.label}
                  onClick={c.action}
                  className="min-h-9 rounded-full px-3 text-xs"
                >
                  {c.label}
                </Button>
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
}

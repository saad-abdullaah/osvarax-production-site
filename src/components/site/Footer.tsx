import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { openCookieSettings } from "./CookieConsent";
import { CONTACT } from "@/lib/contact";
import { SERVICES } from "@/lib/services";

const marketing = SERVICES.filter((s) => s.category === "Marketing").slice(0, 6);
const web = SERVICES.filter((s) => s.category === "Web").slice(0, 6);
const rest = SERVICES.filter((s) => s.category === "Branding" || s.category === "AI & Content").slice(0, 6);

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* CTA strip */}
        <div className="flex flex-col gap-5 border-b border-border py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Let's talk about your growth</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us the goal, we'll come back with a plan, a timeline and a number.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Start a project <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="subtle" size="lg">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-10" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              OsvaraX builds websites, growth engines and AI agents for businesses that want
              measurable results, not activity reports.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-brand"
                >
                  <Mail className="size-4" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-brand"
                >
                  <Phone className="size-4" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-brand"
                >
                  <MessageCircle className="size-4" /> Chat on WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" /> Working with clients worldwide
              </li>
            </ul>
          </div>

          <ServiceCol title="Marketing" items={marketing} />
          <ServiceCol title="Web & Commerce" items={web} />

          <div className="space-y-8">
            <ServiceCol title="Brand & AI" items={rest} />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { to: "/about", label: "About" },
                  { to: "/work", label: "Work" },
                  { to: "/packages", label: "Packages" },
                  { to: "/ai-solutions", label: "AI Solutions" },
                  { to: "/blog", label: "Blog" },
                  { to: "/testimonials", label: "Testimonials" },
                  { to: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-foreground/80 transition-colors hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} OsvaraX. All rights reserved.</p>
          <button type="button" onClick={openCookieSettings} className="text-left transition-colors hover:text-brand">
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  );
}

function ServiceCol({
  title,
  items,
}: {
  title: string;
  items: { slug: string; title: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="text-foreground/80 transition-colors hover:text-brand"
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

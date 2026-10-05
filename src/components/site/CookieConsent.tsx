import { Cookie, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const KEY = "osvarax-cookie-consent";

type Consent = { necessary: true; analytics: boolean; marketing: boolean; date: string };

export function getCookieConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("osvarax:cookie-settings"));
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    }
    setAnalytics(existing.analytics);
    setMarketing(existing.marketing);
    return undefined;
  }, []);

  useEffect(() => {
    const onOpen = () => {
      setCustom(true);
      setOpen(true);
    };
    window.addEventListener("osvarax:cookie-settings", onOpen);
    return () => window.removeEventListener("osvarax:cookie-settings", onOpen);
  }, []);

  const save = (a: boolean, m: boolean) => {
    const consent: Consent = { necessary: true, analytics: a, marketing: m, date: new Date().toISOString() };
    try {
      localStorage.setItem(KEY, JSON.stringify(consent));
      document.cookie = `${KEY}=${a ? "a" : ""}${m ? "m" : ""}n; path=/; max-age=${60 * 60 * 24 * 180}; SameSite=Lax`;
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent("osvarax:cookie-consent", { detail: consent }));
    setOpen(false);
    setCustom(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="animate-rise fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-lift)] sm:inset-x-auto sm:left-5 sm:bottom-5"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-primary-foreground">
          <Cookie className="size-5" />
        </span>
        <div className="flex-1">
          <h2 className="text-base font-semibold">We value your privacy</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            We use cookies to keep the site working, understand how it's used and improve your
            experience. You can choose which cookies to allow.
          </p>
        </div>
        <button
          onClick={() => save(false, false)}
          aria-label="Reject optional cookies and close"
          className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent"
        >
          <X className="size-4" />
        </button>
      </div>

      {custom && (
        <div className="mt-4 space-y-3 rounded-2xl border border-border p-4">
          <Row title="Necessary" desc="Required for core features like theme and forms." checked disabled />
          <Row title="Analytics" desc="Helps us understand traffic and improve pages." checked={analytics} onChange={setAnalytics} />
          <Row title="Marketing" desc="Used to measure ads and show relevant offers." checked={marketing} onChange={setMarketing} />
        </div>
      )}

      <div className="mt-4 flex flex-wrap justify-end gap-2">
        {custom ? (
          <Button variant="subtle" size="sm" onClick={() => save(analytics, marketing)}>
            Save preferences
          </Button>
        ) : (
          <Button variant="subtle" size="sm" onClick={() => setCustom(true)}>
            Customize
          </Button>
        )}
        <Button variant="subtle" size="sm" onClick={() => save(false, false)}>
          Reject all
        </Button>
        <Button variant="brand" size="sm" onClick={() => save(true, true)}>
          Accept all
        </Button>
      </div>
    </div>
  );
}

function Row({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <Switch checked={checked} disabled={!!disabled} onCheckedChange={(v) => onChange?.(v)} aria-label={title} />
    </div>
  );
}

import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-surface/60">
      <div className="wash -left-40 -top-56 size-[36rem]" />
      <div className="absolute inset-0 grid-lines opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CTABand({
  title = "Ready to build something that compounds?",
  description = "Tell us the goal. We'll come back with a plan, a timeline and a number, usually within 24 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <Reveal className="panel relative overflow-hidden px-6 py-14 text-center sm:px-16 sm:py-20">
        <div className="wash left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Start a project <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="subtle" size="lg">
              <Link to="/work">See our work</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

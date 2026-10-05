import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Quote, Star } from "lucide-react";
import { PageHero, Section, CTABand, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/case-studies";
import { discoveryCallWa } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    links: [{ rel: "canonical", href: "/testimonials" }],
    meta: [
      { title: "Testimonials & Client Feedback | OsvaraX" },
      {
        name: "description",
        content:
          "Client feedback for OsvaraX. We publish reviews only once clients confirm them in writing, no invented quotes, ratings or names.",
      },
      { property: "og:title", content: "OsvaraX Testimonials" },
      {
        property: "og:description",
        content: "Verified client feedback, published only once clients confirm it in writing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client feedback, published only when it's real"
        description="Most of our work has been delivered under direct working relationships rather than public review platforms. Rather than write quotes ourselves, we're collecting them properly, each card fills in as a client confirms it."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60} className="h-full">
                <article className="panel lift flex h-full flex-col p-7">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-gradient text-primary-foreground">
                    <Quote className="size-4" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold">{project.client}</h2>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.outcome}
                  </p>
                  <p className="mt-auto pt-6 text-xs text-muted-foreground">
                    Written testimonial pending client confirmation.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="panel p-7">
              <Eyebrow>Aggregate rating</Eyebrow>
              <div
                className="mt-5 flex items-center gap-3"
                aria-label="Aggregate rating not yet published"
              >
                <div className="flex gap-1" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-5 text-muted-foreground/40" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-muted-foreground">
                  Not published yet
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We'll publish a verified average here, with the number of reviews behind it, once
                enough clients have submitted written feedback. Until then this stays empty rather
                than estimated.
              </p>
              <div className="mt-6 grid gap-2">
                <Button asChild variant="brand">
                  <Link to="/work">See the work behind it</Link>
                </Button>
                <Button asChild variant="subtle">
                  <a href={discoveryCallWa} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" /> Book a free call
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}

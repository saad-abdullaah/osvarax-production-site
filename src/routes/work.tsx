import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, MapPin } from "lucide-react";
import { PageHero, Section, CTABand } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/case-studies";

export const Route = createFileRoute("/work")({
  head: () => ({
    links: [{ rel: "canonical", href: "/work" }],
    meta: [
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Our Work | Websites, Stores and Digital Systems | OsvaraX" },
      {
        name: "description",
        content:
          "Explore websites, online stores and business systems delivered by OsvaraX for clients in Pakistan and international markets.",
      },
      { property: "og:title", content: "Our Work | OsvaraX" },
      {
        property: "og:description",
        content: "A selection of practical digital projects built around clear business goals.",
      },
    ],
  }),
  component: Work,
});

function Work() {
  const [featured, ...moreProjects] = projects;

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Digital projects built for real businesses"
        description="A selection of websites, stores and customer systems designed around practical goals, clear delivery and long term value."
      />

      <Section>
        {featured && (
          <Reveal>
            <article className="panel overflow-hidden">
              <ProjectDetails project={featured} featured />
            </article>
          </Reveal>
        )}

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {moreProjects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 80} className="h-full">
              <article className="panel h-full overflow-hidden">
                <ProjectDetails project={project} />
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Have a project in mind?"
        description="Share the goal with us and we will recommend a practical way to build it."
      />
    </>
  );
}

function ProjectDetails({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <div className={featured ? "grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14" : "p-7"}>
      <div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-brand">
          <MapPin className="size-3.5" /> {project.location}
        </div>
        <h2 className="mt-3 text-2xl font-semibold">{project.client}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className={featured ? "border-l border-border pl-6" : "mt-6 border-t border-border pt-5"}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
            What was delivered
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.outcome}</p>
        </div>

        <div className="mt-5 flex gap-3 rounded-lg border border-border bg-surface p-4">
          <BarChart3 className="mt-0.5 size-4 shrink-0 text-brand" />
          <div>
            <p className="text-xs font-semibold text-foreground">Results being tracked</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {project.pendingMetric}. We will publish the result after the client confirms it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BarChart3, MapPin } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/case-studies";

export function ProjectShowcase() {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const x = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  function move(direction: -1 | 1) {
    const width = firstSetRef.current?.offsetWidth;
    if (!width) return;
    const next = x.get() - direction * Math.min(width * 0.24, 360);
    x.set(((next % width) - width) % width);
  }

  useAnimationFrame((_, delta) => {
    const width = firstSetRef.current?.offsetWidth;
    if (!width || pausedRef.current || reduceMotion) return;
    const next = x.get() - delta * 0.025;
    x.set(next <= -width ? next + width : next);
  });

  return (
    <div>
      <div className="mb-7 flex items-end justify-between gap-4">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          A selection of websites, stores and digital systems delivered for growing businesses.
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="subtle" size="icon" onClick={() => move(-1)} aria-label="Previous projects">
            <ArrowLeft />
          </Button>
          <Button variant="subtle" size="icon" onClick={() => move(1)} aria-label="Next projects">
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div
        className="overflow-hidden pb-4"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <motion.div className="flex w-max" style={{ x }}>
          <div ref={firstSetRef} className="flex gap-5 pr-5">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="flex gap-5 pr-5" aria-hidden="true">
            {projects.map((project) => <ProjectCard key={`repeat-${project.slug}`} project={project} />)}
          </div>
        </motion.div>
      </div>

      <Button asChild variant="subtle" size="lg" className="mt-6">
        <Link to="/work">
          View all projects <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="panel flex min-h-[22rem] w-[20rem] flex-col overflow-hidden p-6 sm:w-[28rem] sm:p-7 lg:w-[32rem]">
        <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs font-medium text-brand">
          <MapPin className="size-3.5" /> {project.location}
        </div>
          <span className="font-display text-xs font-semibold text-muted-foreground">
            {String(projects.indexOf(project) + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-8 text-2xl font-semibold">{project.client}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3 border-t border-border pt-5">
          <BarChart3 className="mt-0.5 size-4 shrink-0 text-brand" />
          <p className="text-xs leading-relaxed text-muted-foreground">{project.outcome}</p>
        </div>
    </article>
  );
}
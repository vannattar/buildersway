import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software built with intention. Tools for managing complexity, communicating with care, and becoming.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <FadeIn>
        <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
          Projects
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Building tools for becoming
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          These applications are expressions of The Builder&apos;s Way. Software
          that helps people focus on what matters, communicate with care, and
          move forward with intention.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} {...project} delay={i * 150} />
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-20 rounded-2xl bg-muted/50 p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-semibold">
            What&apos;s next on the trajectory
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            More tools are on the way. Each one an experiment in making
            complexity simpler and intention more accessible. Follow along on
            Substack or social media.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

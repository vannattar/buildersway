import { Hero } from "@/components/sections/Hero";
import { PhilosophyPreview } from "@/components/sections/PhilosophyPreview";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { WritingCard } from "@/components/sections/WritingCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROJECTS, PUBLICATIONS, SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      <PhilosophyPreview />

      {/* Projects */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-rose/5 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <FadeIn>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Projects
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
              Building tools for{" "}
              <span className="bg-gradient-to-r from-brand-amber to-brand-rose bg-clip-text text-transparent">
                becoming
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Software that helps people focus on what matters, communicate with
              care, and move forward with intention.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.name} {...project} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-brand-teal/5 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <FadeIn>
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Writing
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
              Reflections on building and{" "}
              <span className="bg-gradient-to-r from-brand-violet to-brand-blue bg-clip-text text-transparent">
                becoming
              </span>
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PUBLICATIONS.map((pub, i) => (
              <WritingCard key={pub.name} {...pub} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="relative overflow-hidden border-t border-border">
        {/* Watercolor glow */}
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-violet/5 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-teal/5 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
                The Builder
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
                {SITE.author}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                I&apos;m a builder, writer, and believer in the power of small,
                consistent choices. I create software that helps people manage
                complexity with intention, and I write about the philosophy of
                becoming.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Everything here is a work in progress.{" "}
                <span className="text-accent">That&apos;s the point.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

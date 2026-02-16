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
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeIn>
            <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
              Projects
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              Building tools for becoming
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
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
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeIn>
            <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
              Writing
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
              Reflections on building and becoming
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
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                The builder behind the way
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                I&apos;m {SITE.author} — a builder, writer, and believer in the
                power of small, consistent choices. I create software that helps
                people manage complexity with intention, and I write about the
                philosophy of becoming.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Everything here is a work in progress. That&apos;s the point.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

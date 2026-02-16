import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function PhilosophyPreview() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* Subtle watercolor accent in background */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-violet/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-teal/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <FadeIn>
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
            The Philosophy
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
            Everything is a work in progress.{" "}
            <span className="bg-gradient-to-r from-brand-violet to-brand-teal bg-clip-text text-transparent">
              including you.
            </span>
          </h2>
        </FadeIn>

        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <FadeIn delay={200}>
            <p>
              Your life is not a ledger. Your worth is not a net figure to
              be calculated. The only thing that matters is where you&apos;re
              going -- your trajectory.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p>
              You can trace lines from the dots made in the past and draw a
              trajectory into the future. If you don&apos;t like where it leads,
              you change it. You bend the line. The power to redirect is always
              yours.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <p>
              Built into this is compassion -- for yourself and for others. And
              at its core, hope: the quiet belief that everything has the
              ability to become. The only thing you can do about tomorrow is
              plant seeds today.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={500}>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Read More
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

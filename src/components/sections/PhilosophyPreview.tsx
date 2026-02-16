import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function PhilosophyPreview() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <FadeIn>
          <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
            The Philosophy
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
            Everything is a work in progress — including you.
          </h2>
        </FadeIn>

        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <FadeIn delay={200}>
            <p>
              Your life is not a balance sheet. Your worth is not a net figure to
              be calculated. What matters more than where you are is where
              you&apos;re going — your trajectory.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p>
              You can trace lines from the dots made in the past and draw a
              trajectory into the future. If you don&apos;t like where it leads,
              you change it. Small, consistent choices. Some tiny. Some that lead
              to bigger ones. But the power is always yours.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <p>
              Built into this is compassion — for yourself and for others. And at
              its core, hope: the belief that everything has the ability to
              become. The only thing you can do about tomorrow is plant seeds
              today.
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

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-warm/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <FadeIn>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Nothing is.{" "}
            <span className="bg-gradient-to-r from-brand-warm to-brand-teal bg-clip-text text-transparent">
              Everything is becoming.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            The art of building, rebuilding, and becoming — through work,
            reflection, and the space where change begins.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/about">The Philosophy</Button>
            <Button href="/projects" variant="secondary">
              What I&apos;m Building
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

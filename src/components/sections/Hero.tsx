"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated watercolor compass background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Center void: the infinite possibility */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Rotating outer ring */}
          <div
            className="h-[600px] w-[600px] rounded-full border border-accent/10 md:h-[800px] md:w-[800px]"
            style={{ animation: "spin-slow 120s linear infinite" }}
          >
            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-teal/40" />
            <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand-rose/40" />
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-amber/40" />
            <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-violet/40" />
          </div>

          {/* Watercolor blobs radiating from center */}
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/20 blur-[100px] md:h-96 md:w-96"
            style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
          />
          <div
            className="absolute left-1/4 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-rose/15 blur-[80px]"
            style={{ animation: "watercolor-drift 12s ease-in-out infinite" }}
          />
          <div
            className="absolute right-1/4 top-2/3 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/15 blur-[80px]"
            style={{ animation: "watercolor-drift-reverse 14s ease-in-out infinite" }}
          />
          <div
            className="absolute left-2/3 top-1/4 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber/10 blur-[70px]"
            style={{ animation: "watercolor-drift 10s ease-in-out infinite 2s" }}
          />
          <div
            className="absolute left-1/3 top-3/4 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[60px]"
            style={{ animation: "watercolor-drift-reverse 16s ease-in-out infinite 1s" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-32 md:py-40">
        <FadeIn>
          <p className="font-display text-sm font-medium uppercase tracking-[0.25em] text-accent">
            The Builder&apos;s Way
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            Nothing <em>is</em>.
            <br />
            <span className="bg-gradient-to-r from-brand-rose via-brand-violet to-brand-teal bg-clip-text text-transparent">
              Everything is becoming.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            The art of building, rebuilding, and becoming. Through work,
            reflection, and the space where change begins.
          </p>
        </FadeIn>

        <FadeIn delay={450}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/about">Explore the Philosophy</Button>
            <Button href="/projects" variant="secondary">
              See What I&apos;m Building
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

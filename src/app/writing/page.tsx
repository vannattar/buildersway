import type { Metadata } from "next";
import { WritingCard } from "@/components/sections/WritingCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { PUBLICATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on building, becoming, leadership, and the courage to start again.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <FadeIn>
        <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
          Writing
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Reflections on building and becoming
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I write about growth, leadership, creation, and the philosophy of
          becoming. These publications live on Substack — a space for longer
          thinking and honest reflection.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {PUBLICATIONS.map((pub, i) => (
          <WritingCard key={pub.name} {...pub} delay={i * 150} />
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-20 rounded-2xl border border-border p-8 md:p-12">
          <h2 className="font-display text-2xl font-semibold">
            Why I write
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Writing is how I process what I&apos;m learning. It&apos;s how I
              test ideas, find patterns, and share what I discover along the way.
            </p>
            <p>
              The Builder&apos;s Way is the core — exploring what it means to
              build a meaningful life through reflection, discipline, and the
              courage to start again. The Leader&apos;s Way extends that into
              leadership and the responsibility of guiding others while you&apos;re
              still becoming yourself.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

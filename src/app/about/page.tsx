import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "The philosophy behind The Builder's Way. Nothing is, everything is becoming.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      {/* Philosophy */}
      <FadeIn>
        <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
          The Philosophy
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Nothing is.{" "}
          <span className="bg-gradient-to-r from-brand-rose via-brand-violet to-brand-teal bg-clip-text text-transparent">
            Everything is becoming.
          </span>
        </h1>
      </FadeIn>

      <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
        <FadeIn delay={100}>
          <p>
            Everything is a work in progress. You. Your life. Your family.
            Your career. The person you&apos;re still becoming. All of it,
            moving. Always.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p>
            There is no &quot;is&quot; with a period at the end. If it feels
            like a pause, a plateau, a stopping point? That&apos;s an
            illusion. There are no logical breakpoints in a life. Only
            movement, and what you choose to do with it.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Trajectory
          </h2>
          <p className="mt-4">
            You can trace lines from the dots made in the past and draw a
            trajectory into the future. If you don&apos;t like where it
            leads, you change it. You make different choices. You bend the
            line. The power to redirect your life is always yours.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Compassion
          </h2>
          <p className="mt-4">
            When you look at someone, even yourself, you don&apos;t tally
            a ledger and arrive at some net worth of a human being.
            The only thing that matters is where they&apos;re going.
          </p>
          <p className="mt-4">
            This is a way of seeing that replaces judgment with curiosity,
            and the snapshot with the story still being written.
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Hope
          </h2>
          <p className="mt-4">
            At its essence, this is about hope. The quiet, persistent
            belief that everything has the ability to become. Not a promise
            that things will be easy. A promise that they can be different.
          </p>
          <p className="mt-4">
            The only thing you can do about tomorrow is plant seeds today.
            You don&apos;t know how they&apos;ll grow. Often you won&apos;t
            recognize what they become. But whatever you plant now is already
            shaping what comes next.
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Letting go
          </h2>
          <p className="mt-4">
            Perhaps the hardest part is loosening the stories you&apos;ve
            built around yourself. The limitations, the certainties, the things
            you&apos;ve decided are fixed. Those stories can quietly make you
            brittle.
          </p>
          <p className="mt-4">
            You don&apos;t abandon them. You soften them. You hold them
            lightly, the way you&apos;d hold something you love but
            don&apos;t need to grip. And in that space, something new
            becomes possible.
          </p>
        </FadeIn>
      </div>

      {/* The Builder */}
      <FadeIn delay={700}>
        <div className="mt-20 border-t border-border pt-16">
          <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
            The Builder
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold">
            {SITE.author}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I build software, write about growth and leadership, and try to
              live by the philosophy I share here. The Builder&apos;s Way started
              as a Substack, a place to explore the ideas of building,
              rebuilding, and becoming.
            </p>
            <p>
              It grew into something bigger: a framework for how I approach work,
              creativity, and life. The apps I build, the words I write, and the
              way I show up every day are all expressions of the same idea:
              that nothing is fixed, and everything is possible.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">See What I&apos;m Building</Button>
            <Button href="/writing" variant="secondary">
              Read My Writing
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

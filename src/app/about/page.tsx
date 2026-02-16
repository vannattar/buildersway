import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "The philosophy behind The Builder's Way — nothing is, everything is becoming.",
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
          <span className="bg-gradient-to-r from-brand-warm to-brand-teal bg-clip-text text-transparent">
            Everything is becoming.
          </span>
        </h1>
      </FadeIn>

      <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
        <FadeIn delay={100}>
          <p>
            Everything is a work in progress. You. Your life. Your family. Your
            career. Your success. Your personal growth as a human being. It&apos;s
            all becoming something — always.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p>
            There&apos;s no such thing as &quot;is&quot; with a period at the end.
            If thinking about something as it <em>is</em> suggests a pause, a
            plateau, a ledge, some kind of stopping point — that&apos;s an
            illusion. There are no logical breakpoints in a life. Only movement.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Trajectory
          </h2>
          <p className="mt-4">
            You can trace lines from the dots made in the past and create a
            trajectory into the future. If you don&apos;t like where that line is
            heading, you can change it. You simply make different choices —
            small, tiny, consistent choices.
          </p>
          <p className="mt-4">
            Some choices are small. Some of those small choices lead to bigger
            ones. But the idea is that you always have the power to change your
            trajectory.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Compassion
          </h2>
          <p className="mt-4">
            When you look at someone, you don&apos;t assess them and come up
            with a balance sheet to figure out their net value. That&apos;s less
            important than where they&apos;re going.
          </p>
          <p className="mt-4">
            Built into this philosophy is self-compassion and compassion for
            others. You stop judging the snapshot and start seeing the story.
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Hope
          </h2>
          <p className="mt-4">
            At its essence, this is about hope. Everything has the ability to
            become. That message is a message of hope, of possibility.
          </p>
          <p className="mt-4">
            The only thing you can do about tomorrow — today, in this moment —
            is plant seeds. You have no guarantee they&apos;ll grow. You
            don&apos;t know how they&apos;ll grow. Often you don&apos;t even
            recognize what the seed will become. But whatever you plant today
            defines your tomorrows.
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Letting go
          </h2>
          <p className="mt-4">
            This way of seeing invites you to loosen the stories you&apos;ve
            built around yourself — the limitations, the strong preferences, the
            things you&apos;ve decided are essential parts of who you are. Those
            stories can make you less resilient, less flexible, less agile, and
            ultimately less happy.
          </p>
          <p className="mt-4">
            It&apos;s not that you abandon them. You soften them. You hold them
            lightly. And in doing so, you make space for what&apos;s next.
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
              as a Substack — a place to explore the ideas of building,
              rebuilding, and becoming.
            </p>
            <p>
              It grew into something bigger: a framework for how I approach work,
              creativity, and life. The apps I build, the words I write, and the
              way I show up every day are all expressions of the same idea —
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

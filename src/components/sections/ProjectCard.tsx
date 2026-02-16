import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

interface ProjectCardProps {
  name: string;
  tagline: string;
  description: string;
  features: readonly string[];
  url: string;
  status: "coming-soon" | "live";
  philosophy: string;
  delay?: number;
}

export function ProjectCard({
  name,
  tagline,
  description,
  features,
  url,
  status,
  philosophy,
  delay = 0,
}: ProjectCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
        {/* Gradient glow on hover */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-brand-rose/0 via-brand-violet/0 to-brand-teal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-brand-rose/5 group-hover:via-brand-violet/5 group-hover:to-brand-teal/5" />

        <div className="relative flex items-start justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold">{name}</h3>
            <p className="mt-1 text-sm font-medium bg-gradient-to-r from-brand-rose to-brand-violet bg-clip-text text-transparent">
              {tagline}
            </p>
          </div>
          {status === "coming-soon" && (
            <Badge variant="accent">Coming Soon</Badge>
          )}
        </div>

        <p className="relative mt-4 leading-relaxed text-muted-foreground">
          {description}
        </p>

        <ul className="relative mt-6 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-brand-violet to-brand-teal" />
              {feature}
            </li>
          ))}
        </ul>

        <blockquote className="relative mt-6 border-l-2 border-brand-violet/30 pl-4 text-sm italic text-muted-foreground">
          {philosophy}
        </blockquote>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-brand-rose"
        >
          Visit {name}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </FadeIn>
  );
}

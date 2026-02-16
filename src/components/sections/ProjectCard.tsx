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
      <div className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold">{name}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{tagline}</p>
          </div>
          {status === "coming-soon" && (
            <Badge variant="accent">Coming Soon</Badge>
          )}
        </div>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          {description}
        </p>

        <ul className="mt-6 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-1 w-1 rounded-full bg-brand-sage" />
              {feature}
            </li>
          ))}
        </ul>

        <blockquote className="mt-6 border-l-2 border-brand-warm/40 pl-4 text-sm italic text-muted-foreground">
          {philosophy}
        </blockquote>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
        >
          Visit {name}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </FadeIn>
  );
}

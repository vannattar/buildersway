import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

interface WritingCardProps {
  name: string;
  description: string;
  url: string;
  primary: boolean;
  delay?: number;
}

export function WritingCard({
  name,
  description,
  url,
  primary,
  delay = 0,
}: WritingCardProps) {
  return (
    <FadeIn delay={delay}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
      >
        <div className="flex items-start justify-between">
          <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">
            {name}
          </h3>
          {primary && <Badge variant="accent">Primary</Badge>}
        </div>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Read on Substack
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </FadeIn>
  );
}

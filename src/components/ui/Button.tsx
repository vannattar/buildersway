import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  external,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all",
    variant === "primary" &&
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
    variant === "secondary" &&
      "border border-border bg-transparent text-foreground hover:bg-muted",
    variant === "ghost" &&
      "text-muted-foreground hover:text-foreground hover:bg-muted",
    className
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}

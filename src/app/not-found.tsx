import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        This page is still becoming
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        It doesn&apos;t exist yet — but then again, everything is a work in
        progress.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}

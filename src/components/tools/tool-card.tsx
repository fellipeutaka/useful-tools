import Link from "next/link";
import type { Tool } from "~/config/tools";

export function ToolCard({ title, description, href, releasedAt }: Tool) {
  if (!releasedAt) {
    return (
      <div
        aria-disabled
        className="relative inline-block h-full w-64 cursor-not-allowed select-none rounded-lg border border-border p-6"
      >
        <div className="absolute inset-0 grid h-full w-full place-content-center rounded-lg bg-gradient-to-br from-background/95 to-background/60">
          <p className="font-semibold">Coming Soon!</p>
        </div>
        <h3 className="mb-2 font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    );
  }

  return (
    <Link
      className="inline-block h-full w-64 space-y-2 rounded-lg border border-border p-6 transition hover:border-border/60"
      href={href}
    >
      <h3 className="font-bold">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Link>
  );
}

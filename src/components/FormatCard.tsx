import type { Program } from "../data/programs";
import { ImagePlaceholder } from "./ImagePlaceholder";

// Format_Card, Stacked layout: image top, then kicker/title/description.
// One parameterized component driven by data (src/data/programs.ts) rather
// than a hand-authored function per card.
export function FormatCard({ program }: { program: Program }) {
  return (
    <div
      className="flex h-full flex-1 flex-col overflow-hidden rounded-[var(--radius-md)] border"
      style={{
        borderColor: "var(--color-stroke-subtle)",
        backgroundColor: "var(--color-warm-0)",
        boxShadow: "var(--shadow-subtle)",
      }}
    >
      <div className="relative h-[220px] w-full sm:h-[280px]">
        <ImagePlaceholder variant="coral" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
          {program.kicker}
        </p>
        <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
          {program.title}
        </h3>
        <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
          {program.description}
        </p>
      </div>
    </div>
  );
}

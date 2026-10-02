import type { Speaker } from "../data/events";

// Polaroid_Card (Figma node 590:446 and siblings) — one per featured-event speaker.
export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div
      className="flex min-w-0 flex-1 flex-col gap-3 rounded-xl border p-3"
      style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
    >
      <div className="aspect-square w-full overflow-hidden rounded-[6px]">
        <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="truncate text-[16px] font-bold" style={{ color: "var(--color-warm-900)" }}>
          {speaker.name}
        </p>
        <p className="truncate text-[13px] font-medium tracking-[0.2px]" style={{ color: "var(--color-accent-coral)" }}>
          {speaker.role}
        </p>
      </div>
    </div>
  );
}

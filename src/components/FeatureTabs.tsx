import type { GatheringTab } from "../data/gatherings";
import { KenBurnsImage } from "./KenBurnsImage";

interface FeatureTabsProps {
  tabs: GatheringTab[];
  activeId: string;
  /** 0–1 fill amount per tab, index-aligned with `tabs`. */
  progress: number[];
  /** Sticky offset for the nav, in px — matches the scroll-spy trigger line in Gatherings.tsx. */
  navOffset: number;
  onSelect: (id: string) => void;
  registerStepRef: (index: number, el: HTMLDivElement | null) => void;
}

// Feature_Tabs_Section — a sticky nav (left) with a per-item scroll-progress
// line, and every tab's content stacked as normal-flow "steps" (right).
// Scrolling through a step fills its nav line top-to-bottom; once full, the
// next item takes over. Gatherings.tsx owns the scroll math — it needs the
// steps' real DOM positions — and passes the results down as props.
//
// This sidebar/content layout only works at `lg`+. Below that, there's no
// menu — each gathering instead renders as its own editorial card (Figma
// node 813:795: numbered kicker, heading, full-bleed photo, indented
// description + rule), one per gathering, in plain scroll order.
export function FeatureTabs({ tabs, activeId, progress, navOffset, onSelect, registerStepRef }: FeatureTabsProps) {
  return (
    <div className="flex w-full flex-col lg:flex-row lg:items-start lg:gap-16">
      <nav
        aria-label="Gathering formats"
        className="sticky hidden w-full shrink-0 flex-col items-start gap-1 lg:flex lg:w-[280px]"
        style={{ top: navOffset }}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeId;
          const fill = Math.round((progress[index] ?? 0) * 100);
          return (
            <button
              key={tab.id}
              type="button"
              aria-current={isActive ? "step" : undefined}
              onClick={() => onSelect(tab.id)}
              className="relative w-full py-3 pl-5 pr-4 text-left text-body transition-colors"
              style={{
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--color-text-primary)" : "var(--color-text-decorative)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[3px] overflow-hidden rounded-full"
                style={{ backgroundColor: "var(--color-stroke-subtle)" }}
              >
                <span
                  className="absolute left-0 top-0 w-full"
                  style={{
                    height: `${fill}%`,
                    backgroundColor: "var(--color-accent-coral)",
                    transition: "height 100ms linear",
                  }}
                />
              </span>
              {tab.tabLabel}
            </button>
          );
        })}
      </nav>

      {/* Desktop/lg steps — tracked by registerStepRef for the scroll-spy math. */}
      <div className="hidden w-full flex-1 flex-col gap-24 lg:flex">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            ref={(el) => registerStepRef(index, el)}
            className="flex flex-col items-start gap-6 lg:gap-8"
          >
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
                {tab.title}
              </h3>
              <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
                {tab.description}
              </p>
            </div>
            {/* Full column width, 16:9 — e.g. 482px tall at the 856px column
                width the right column renders at on a 1440px viewport. */}
            <div className="w-full overflow-hidden rounded-[var(--radius-lg)]" style={{ aspectRatio: "16 / 9" }}>
              <KenBurnsImage
                src={tab.image}
                alt={tab.imageAlt}
                motion={tab.motion}
                focus={tab.focus}
                className="h-full w-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Below-lg editorial cards — no scroll-spy, no ref (nothing on this
          breakpoint reads step position), just plain stacked content. */}
      <div className="flex w-full flex-col gap-12 lg:hidden">
        {tabs.map((tab, index) => (
          <div key={tab.id} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                {String(index + 1).padStart(2, "0")} / {tab.tabLabel.toUpperCase()}
              </p>
              <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
                {tab.title}
              </h3>
            </div>
            {/* Full-bleed: breaks out of the section's own px-6/sm:px-10 padding. */}
            <div className="-mx-6 h-[300px] overflow-hidden sm:-mx-10">
              <KenBurnsImage
                src={tab.image}
                alt={tab.imageAlt}
                motion={tab.motion}
                focus={tab.focus}
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-6 pl-20">
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                {tab.description}
              </p>
              <div className="h-px w-full" style={{ backgroundColor: "var(--color-accent-coral)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

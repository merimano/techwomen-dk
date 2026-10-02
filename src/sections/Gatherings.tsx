import { useEffect, useRef, useState } from "react";
import { gatheringsIntro, gatheringTabs } from "../data/gatherings";
import { SectionHeader } from "../components/SectionHeader";
import { FeatureTabs } from "../components/FeatureTabs";

// Gap below the sticky site header — where the nav itself pins.
const BREATHING_ROOM = 24;

// Feature_Tabs_Section (Figma nodes 658:2331–658:2392) as a scroll-spy: the
// nav pins via plain CSS `sticky` while its four steps stack normally in
// the right column. A step becomes active once it covers the majority of
// the screen — i.e. once its top crosses the viewport's vertical midpoint —
// and its nav line fills to match; once full, the next item takes over. No
// page-scroll hijacking — the browser's own sticky behavior handles
// pin/unpin, so the nav scrolls away naturally once the last step ends.
export function Gatherings() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [navOffset, setNavOffset] = useState(96);
  const [progress, setProgress] = useState<number[]>(() => gatheringTabs.map(() => 0));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let rafId = 0;

    // Where the nav itself pins — just below the sticky site header.
    const navTop = () => (document.querySelector("header")?.getBoundingClientRect().height ?? 72) + BREATHING_ROOM;
    // Where a step "wins" the screen — the viewport's vertical midpoint, so
    // a step only takes over once more than half the screen is its content.
    const activationTrigger = () => window.innerHeight / 2;

    const measure = () => setNavOffset(navTop());

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const trigger = activationTrigger();
        let lastReached = 0;
        const next = stepRefs.current.map((el, index) => {
          if (!el) return 0;
          const rect = el.getBoundingClientRect();
          const fill = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height));
          if (fill > 0) lastReached = index;
          return fill;
        });
        setProgress(next);
        setActiveIndex(lastReached);
      });
    };

    measure();
    onScroll();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSelect = (id: string) => {
    const index = gatheringTabs.findIndex((tab) => tab.id === id);
    const el = stepRefs.current[index];
    if (!el) return;
    const target = el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: target, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const activeTab = gatheringTabs[activeIndex] ?? gatheringTabs[0];

  return (
    <section id="gatherings" style={{ backgroundColor: "var(--color-warm-50)" }}>
      <div className="px-6 pt-16 sm:px-10">
        <div className="mx-auto w-full max-w-7xl lg:px-10">
          {/* 96px below the hero heading — the other 96px lives on the tabs
              block below (pt-24), matching Figma's two separately-padded
              frames (header frame pb-96, tabs frame pt-96) for a 192px gap. */}
          <div className="pb-24">
            <SectionHeader kicker={gatheringsIntro.kicker.toUpperCase()} title={gatheringsIntro.title} />
          </div>
        </div>
      </div>

      <div className="px-6 pb-16 sm:px-10">
        <div className="mx-auto w-full max-w-7xl lg:px-10">
          <FeatureTabs
            tabs={gatheringTabs}
            activeId={activeTab.id}
            progress={progress}
            navOffset={navOffset}
            onSelect={handleSelect}
            registerStepRef={(index, el) => {
              stepRefs.current[index] = el;
            }}
          />
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { sponsorshipIntro, sponsorshipTiers } from "../data/sponsorship";
import { TierCard } from "../components/TierCard";
import { ButtonSecondary } from "../components/Button";
import { DotGrid } from "../components/DotGrid";
import { useCursorSpotlight } from "../components/useCursorSpotlight";
import "./sponsorship-reveal.css";

const TIER_STAGGER_MS = 100;

export function Sponsorship() {
  // Same dot-grid-brightens-around-the-cursor treatment as the Hero.
  const sectionRef = useRef<HTMLElement>(null);
  const cursorActive = useCursorSpotlight(sectionRef);

  // Tier cards rise in left to right, triggered once they scroll into view
  // — the section sits below the fold, same reasoning as Mission's.
  const tiersRef = useRef<HTMLDivElement>(null);
  const [tiersOn, setTiersOn] = useState(false);
  useEffect(() => {
    const el = tiersRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setTiersOn(true);
        io.disconnect();
      },
      { rootMargin: "-10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="sponsorship" ref={sectionRef} className="relative overflow-hidden px-6 py-16 sm:px-10">
      <DotGrid cursorActive={cursorActive} />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:px-10">
        <div className="flex max-w-3xl flex-col items-start gap-6 text-left">
          <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
            {sponsorshipIntro.kicker}
          </p>
          <h2 className="text-heading-1" style={{ color: "var(--color-text-primary)" }}>
            {sponsorshipIntro.title}
          </h2>
          <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
            {sponsorshipIntro.pitch}
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div ref={tiersRef} className={`tw-tiers grid grid-cols-1 gap-8 md:grid-cols-3 ${tiersOn ? "is-on" : ""}`}>
            {sponsorshipTiers.map((tier, i) => (
              <div key={tier.name} className="tw-tier-card" style={{ "--delay": `${i * TIER_STAGGER_MS}ms` } as CSSProperties}>
                <TierCard tier={tier} href={sponsorshipIntro.deckCtaHref} />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <ButtonSecondary href={sponsorshipIntro.deckCtaHref} target="_blank" rel="noopener noreferrer">
              {sponsorshipIntro.deckCtaLabel}
            </ButtonSecondary>
            <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
              {sponsorshipIntro.deckNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

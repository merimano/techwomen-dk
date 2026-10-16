import { useEffect, useRef, useState, type CSSProperties } from "react";
import { hero } from "../data/nav";
import { ButtonPrimary } from "../components/Button";
import { DotGrid } from "../components/DotGrid";
import { useCursorSpotlight } from "../components/useCursorSpotlight";
import "./hero-reveal.css";

// Headline reveal: each line slides up ~20px from behind a mask and fades
// in, staggered by LINE_STAGGER_MS. Deliberately line-level rather than
// word-by-word, so it doesn't repeat the Mission section's word reveal.
//
// The whole entrance (headline -> subline -> CTA settling) is budgeted to
// finish in ~1.2s total — nobody should wait on the CTA to become usable —
// so every duration/gap here is intentionally snappier than Mission's.
const LINE_STAGGER_MS = 120;
// Must match the animation-duration on .tw-hero-line in hero-reveal.css.
const LINE_DURATION_MS = 380;
const GAP_AFTER_HEADLINE_MS = 100;
// Subline fades in once the headline's last line finishes settling.
const SUBLINE_DELAY_MS = (hero.titleLines.length - 1) * LINE_STAGGER_MS + LINE_DURATION_MS + GAP_AFTER_HEADLINE_MS;
// Must match the animation-duration on .tw-hero-subline in hero-reveal.css.
const SUBLINE_DURATION_MS = 300;
const GAP_AFTER_SUBLINE_MS = 100;
// CTA arrives last — the one moment the reveal sequence asks the eye to
// land on. Its scale/opacity animation is 200ms (see .tw-hero-cta in
// hero-reveal.css), so CTA_DELAY_MS + 200 should land at ~1200ms.
const CTA_DELAY_MS = SUBLINE_DELAY_MS + SUBLINE_DURATION_MS + GAP_AFTER_SUBLINE_MS;

function lineStyle(index: number): CSSProperties {
  return { "--delay": `${index * LINE_STAGGER_MS}ms` } as CSSProperties;
}

// Hero_Centered (node 285:5005). The Figma frame's ~240-ellipse dot-grid
// background is recreated with a single CSS radial-gradient pattern rather
// than 240 individual absolutely-positioned image layers — same visual
// effect, none of the fixed-position bloat that made the Figma Make output
// unresponsive (see Guidelines.md "Responsiveness & completeness").
export function Hero() {
  // Hero is above the fold, so the reveal plays on mount (unlike Mission's
  // scroll-triggered one) — `isOn` starts false so the browser paints the
  // resting state once before the animation class lands, or the CSS
  // animation never visibly starts.
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    setIsOn(true);
  }, []);

  // Dot grid brightens around the cursor — desktop only (see DotGrid).
  const heroRef = useRef<HTMLElement>(null);
  const cursorActive = useCursorSpotlight(heroRef);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-[calc(100svh-72px)] flex-col items-center justify-center gap-16 overflow-hidden px-6 py-16 text-center sm:px-10"
    >
      <DotGrid cursorActive={cursorActive} />
      <div
        aria-hidden="true"
        className="tw-hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-coral-300) 0%, transparent 70%)" }}
      />

      <div className={`relative flex max-w-3xl flex-col items-center gap-4 tw-hero ${isOn ? "is-on" : ""}`}>
        <h1
          className="text-[40px] leading-[46px] tracking-[-1px] sm:text-[56px] sm:leading-[62px] lg:text-display"
          style={{ color: "var(--color-text-primary)", fontWeight: 700 }}
        >
          <span className="block sm:hidden">
            {hero.mobileTitleLines.map((line, index) => (
              <span key={line} className="tw-hero-line-mask">
                <span className="tw-hero-line" style={lineStyle(index)}>
                  {line}
                </span>
              </span>
            ))}
          </span>
          <span className="hidden sm:block">
            {hero.titleLines.map((line, index) => (
              <span key={line} className="tw-hero-line-mask">
                <span className="tw-hero-line" style={lineStyle(index)}>
                  {line}
                </span>
              </span>
            ))}
          </span>
        </h1>
        <p
          className="tw-hero-subline max-w-2xl text-body-large"
          style={{ color: "var(--color-text-primary)", "--delay": `${SUBLINE_DELAY_MS}ms` } as CSSProperties}
        >
          <span className="block sm:hidden">
            {hero.mobileSubtitleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
          <span className="hidden sm:block">
            {hero.subtitleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </p>
      </div>

      <div
        className={`tw-hero relative ${isOn ? "is-on" : ""}`}
        style={{ "--delay": `${CTA_DELAY_MS}ms` } as CSSProperties}
      >
        <ButtonPrimary href="#membership" className="tw-hero-cta">
          {hero.ctaLabel}
        </ButtonPrimary>
      </div>
    </section>
  );
}

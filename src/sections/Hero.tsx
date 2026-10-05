import { hero } from "../data/nav";
import { ButtonPrimary } from "../components/Button";

// Hero_Centered (node 285:5005). The Figma frame's ~240-ellipse dot-grid
// background is recreated with a single CSS radial-gradient pattern rather
// than 240 individual absolutely-positioned image layers — same visual
// effect, none of the fixed-position bloat that made the Figma Make output
// unresponsive (see Guidelines.md "Responsiveness & completeness").
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-72px)] flex-col items-center justify-center gap-16 overflow-hidden px-6 py-16 text-center sm:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(var(--color-warm-600) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-coral-300) 0%, transparent 70%)" }}
      />

      <div className="relative flex max-w-3xl flex-col items-center gap-4">
        <h1 className="text-[40px] leading-[46px] tracking-[-1px] sm:text-[56px] sm:leading-[62px] lg:text-display" style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>
          <span className="block sm:hidden">
            {hero.mobileTitleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
          <span className="hidden sm:block">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </h1>
        <p className="max-w-2xl text-body-large" style={{ color: "var(--color-text-primary)" }}>
          {hero.subtitleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className="relative">
        <ButtonPrimary href="#membership" className="shadow-[var(--shadow-glow-coral)]">
          {hero.ctaLabel}
        </ButtonPrimary>
      </div>
    </section>
  );
}

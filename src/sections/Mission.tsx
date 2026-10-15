import { useEffect, useRef, useState, type CSSProperties } from "react";
import { mission } from "../data/mission";
import "./mission-reveal.css";

// Timing lifted from Figma's motion data for node 543:9038 (cohort
// 285:5004, 3310ms, plays once): the kicker fades/rises immediately
// (0ms delay, 550ms), then each word follows at a fixed ~60ms stagger
// starting 350ms in, each taking 500ms to settle.
const WORD_BASE_DELAY_MS = 350;
const WORD_STAGGER_MS = 60;
const WORD_DURATION_MS = 500;
const KICKER_DURATION_MS = 550;

function wordStyle(index: number): CSSProperties {
  return {
    "--delay": `${WORD_BASE_DELAY_MS + index * WORD_STAGGER_MS}ms`,
    "--dur": `${WORD_DURATION_MS}ms`,
  } as CSSProperties;
}

export function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Plays once, when the statement first scrolls into view — not on
    // page mount, since the section sits well below the fold.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsOn(true);
        io.disconnect();
      },
      { rootMargin: "-10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = mission.statement.split(" ");

  return (
    <section className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-100)" }}>
      <div className="mx-auto flex max-w-7xl flex-col lg:px-10">
        <div ref={ref} className={`tw-mission flex max-w-4xl flex-col gap-6 ${isOn ? "is-on" : ""}`}>
          <p
            className="tw-mission-reveal text-kicker"
            style={{ color: "var(--color-accent-coral)", "--dur": `${KICKER_DURATION_MS}ms`, "--rise-from": "12px" } as CSSProperties}
          >
            {mission.kicker}
          </p>
          <p
            className="text-[26px] font-semibold leading-[36px] tracking-[-0.3px] sm:text-heading-2"
            style={{ color: "var(--color-text-primary)" }}
          >
            {words.flatMap((word, index) => [
              <span key={`w-${index}`} className="tw-mission-word tw-mission-reveal" style={wordStyle(index)}>
                {word}
              </span>,
              " ",
            ])}
          </p>
        </div>
      </div>
    </section>
  );
}

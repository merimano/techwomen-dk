import { useEffect, useRef, useState } from "react";
import { membership } from "../data/membership";
import { ButtonPrimary } from "../components/Button";
import { DotGrid } from "../components/DotGrid";
import { useCursorSpotlight } from "../components/useCursorSpotlight";
import "./membership-photos.css";

// Membership — Coming soon (Figma node 861:490). The two portraits are
// positioned as percentages of a square bounding box so their exact Figma
// proportions (320x400 portraits, offset by 220/40 within a 520x520 box)
// scale fluidly with the container instead of jumping between breakpoints.
export function Membership() {
  const [portrait1, portrait2] = membership.visual;

  // Same dot-grid-brightens-around-the-cursor treatment as the Hero.
  const sectionRef = useRef<HTMLElement>(null);
  const cursorActive = useCursorSpotlight(sectionRef);

  // Photo stack plays once, when it scrolls into view (the section sits
  // well below the fold — same reasoning as Mission's reveal).
  const photosRef = useRef<HTMLDivElement>(null);
  const [photosOn, setPhotosOn] = useState(false);
  useEffect(() => {
    const el = photosRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPhotosOn(true);
        io.disconnect();
      },
      { rootMargin: "-10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll parallax: the back/front cards drift at different rates as the
  // section scrolls through the viewport, giving the stack depth. Lives on
  // a separate wrapper per card so it never fights the entrance animation's
  // own `transform` (see membership-photos.css).
  const backParallaxRef = useRef<HTMLDivElement>(null);
  const frontParallaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let rafId = 0;
    const applyParallax = (el: HTMLDivElement | null, factor: number, viewportCenter: number) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      el.style.transform = `translateY(${(viewportCenter - elCenter) * factor}px)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        applyParallax(backParallaxRef.current, 0.06, viewportCenter);
        applyParallax(frontParallaxRef.current, 0.12, viewportCenter);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-16 sm:px-10"
      style={{ backgroundColor: "var(--color-warm-100)" }}
    >
      <DotGrid cursorActive={cursorActive} />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
        <div className="flex flex-col items-start gap-8 lg:w-[560px] lg:shrink-0">
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-kicker" style={{ color: "var(--color-accent-coral)" }}>
              <span className="relative inline-flex size-2" aria-hidden="true">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:animate-none"
                  style={{ backgroundColor: "var(--color-accent-coral)" }}
                />
                <span
                  className="relative inline-flex size-2 rounded-full"
                  style={{ backgroundColor: "var(--color-accent-coral)" }}
                />
              </span>
              {membership.kicker.toUpperCase()}
            </p>
            <h2 className="text-heading-1" style={{ color: "var(--color-text-primary)" }}>
              {membership.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
            {membership.description}
          </p>
          <ButtonPrimary href={membership.ctaHref} target="_blank" rel="noopener noreferrer">
            {membership.ctaLabel}
          </ButtonPrimary>
        </div>

        <div
          ref={photosRef}
          className={`tw-membership-photos relative aspect-square w-full max-w-[420px] shrink-0 lg:ml-auto lg:max-w-[480px] ${photosOn ? "is-on" : ""}`}
        >
          <div
            ref={backParallaxRef}
            className="absolute"
            style={{ left: "0%", top: "0%", width: "61.5%", height: "76.9%" }}
          >
            <div
              className="tw-membership-photo-back h-full w-full overflow-hidden rounded-[24px] border-[6px] sm:border-8"
              style={{ borderColor: "var(--color-warm-0)", boxShadow: "var(--shadow-large)" }}
            >
              <img
                src={portrait1.src}
                alt={portrait1.alt}
                className="h-full w-full scale-110 object-cover object-[35%_center]"
              />
            </div>
          </div>
          <div
            ref={frontParallaxRef}
            className="absolute"
            style={{ left: "42.3%", top: "7.7%", width: "61.5%", height: "76.9%" }}
          >
            <div
              className="tw-membership-photo-front h-full w-full overflow-hidden rounded-[24px] border-[6px] sm:border-8"
              style={{ borderColor: "var(--color-warm-0)", boxShadow: "var(--shadow-large)" }}
            >
              <img
                src={portrait2.src}
                alt={portrait2.alt}
                className="h-full w-full scale-110 object-cover object-[center_60%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

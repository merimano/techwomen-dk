import { useEffect, useState, type RefObject } from "react";

// Tracks the cursor position (as --mx/--my CSS custom properties) within
// `ref`'s element and reports whether the cursor is currently inside it —
// desktop only (fine pointer + hover), so a touch tap never triggers it.
export function useCursorSpotlight(ref: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);

  return active;
}

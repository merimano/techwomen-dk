import "./dot-grid.css";

const dotStyle = {
  backgroundImage: "radial-gradient(var(--color-warm-600) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

// Dim dot-grid background that brightens in a soft circle around the
// cursor on desktop — pass `cursorActive` from useCursorSpotlight, called
// with a ref on the nearest `relative overflow-hidden` ancestor.
export function DotGrid({ cursorActive }: { cursorActive: boolean }) {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.16]" style={dotStyle} />
      <div
        aria-hidden="true"
        className={`tw-dot-grid-spotlight pointer-events-none absolute inset-0 ${cursorActive ? "is-active" : ""}`}
        style={dotStyle}
      />
    </>
  );
}

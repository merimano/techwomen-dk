interface ImagePlaceholderProps {
  /** short label rendered over the placeholder, e.g. a program name or initials */
  label?: string;
  variant?: "coral" | "coral-teal" | "warm";
  className?: string;
}

// Stand-in for real photography. The Figma file's images are served from
// URLs that expire ~7 days after export, and this environment's network
// policy blocks fetching figma.com asset URLs directly — so rather than
// ship a page with images that quietly break, every photo slot renders one
// of these token-based gradient placeholders instead. Drop real files into
// src/assets/images and swap the <ImagePlaceholder> for an <img> once
// photography is available; see CLAUDE.md for the full list of slots.
export function ImagePlaceholder({ label, variant = "warm", className = "" }: ImagePlaceholderProps) {
  const bg =
    variant === "coral"
      ? "bg-gradient-coral"
      : variant === "coral-teal"
        ? "bg-gradient-coral-teal"
        : "bg-[var(--color-warm-200)]";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${bg} ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {label && (
        <span className="relative text-kicker text-white/80">{label}</span>
      )}
    </div>
  );
}

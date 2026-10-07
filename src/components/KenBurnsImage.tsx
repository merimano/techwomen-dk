import { useEffect, useRef, useState } from "react";
import "./ken-burns.css";

/**
 * Photo with a slow "Ken Burns" zoom or pan.
 * - Moves for `duration` seconds, then eases back the same way (smooth, no jump)
 * - Only animates while on screen
 * - Visitors with "reduce motion" turned on see a still photo
 *
 * Usage:
 *   <KenBurnsImage
 *     src="/images/workshop.jpg"
 *     alt="AI workshop: members at tables listening to a speaker"
 *     motion="zoom"            // "zoom" | "pan-left" | "pan-right"
 *     focus="70% 45%"          // where the zoom heads towards (x y)
 *     className="aspect-[4/3]"
 *   />
 */
type Motion = "zoom" | "pan-left" | "pan-right";

type Props = {
  src: string;
  alt: string;
  motion?: Motion;
  focus?: string;
  duration?: number;
  className?: string;
};

export function KenBurnsImage({
  src,
  alt,
  motion = "zoom",
  focus = "50% 50%",
  duration = 4,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`tw-kb tw-kb--${motion} ${inView ? "is-on" : ""} ${className}`}
      style={{ ["--kb-focus" as string]: focus, ["--kb-dur" as string]: `${duration}s` }}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

import { membership } from "../data/membership";
import { ButtonPrimary } from "../components/Button";

// Membership — Coming soon (Figma node 861:490). The two portraits are
// positioned as percentages of a square bounding box so their exact Figma
// proportions (320x400 portraits, offset by 220/40 within a 520x520 box)
// scale fluidly with the container instead of jumping between breakpoints.
export function Membership() {
  const [portrait1, portrait2] = membership.visual;

  return (
    <section id="membership" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-100)" }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
        <div className="flex flex-col items-start gap-8 lg:w-[560px] lg:shrink-0">
          <div className="flex flex-col gap-6">
            <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
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
          <ButtonPrimary href={membership.ctaHref}>{membership.ctaLabel}</ButtonPrimary>
        </div>

        <div className="relative aspect-square w-full max-w-[420px] shrink-0 lg:ml-auto lg:max-w-[480px]">
          <div
            className="absolute overflow-hidden rounded-[24px] border-[6px] sm:border-8"
            style={{
              left: "0%",
              top: "0%",
              width: "61.5%",
              height: "76.9%",
              borderColor: "var(--color-warm-0)",
              boxShadow: "var(--shadow-large)",
            }}
          >
            <img
              src={portrait1.src}
              alt={portrait1.alt}
              className="h-full w-full scale-110 object-cover object-[35%_center]"
            />
          </div>
          <div
            className="absolute overflow-hidden rounded-[24px] border-[6px] sm:border-8"
            style={{
              left: "42.3%",
              top: "7.7%",
              width: "61.5%",
              height: "76.9%",
              borderColor: "var(--color-warm-0)",
              boxShadow: "var(--shadow-large)",
            }}
          >
            <img
              src={portrait2.src}
              alt={portrait2.alt}
              className="h-full w-full scale-110 object-cover object-[center_60%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

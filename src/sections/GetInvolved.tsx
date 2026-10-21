import { useEffect, useRef, useState, type CSSProperties } from "react";
import { getInvolved } from "../data/getInvolved";
import { ButtonPrimary } from "../components/Button";
import { ArrowIcon } from "../components/icons";
import "./get-involved-reveal.css";

const ROLE_STAGGER_MS = 100;

export function GetInvolved() {
  // Roles stack top-to-bottom reveal, triggered once the list scrolls into
  // view — the section sits below the fold, same reasoning as Mission's.
  const rolesRef = useRef<HTMLDivElement>(null);
  const [rolesOn, setRolesOn] = useState(false);
  useEffect(() => {
    const el = rolesRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRolesOn(true);
        io.disconnect();
      },
      { rootMargin: "-10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="get-involved" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-50)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
            {getInvolved.kicker.toUpperCase()}
          </p>
          <h2 className="text-heading-1" style={{ color: "var(--color-text-primary)" }}>
            {getInvolved.title}
          </h2>
          <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
            {getInvolved.description}
          </p>
        </div>

        <div
          className="flex flex-col gap-12 rounded-[var(--radius-md)] border p-6 sm:p-12"
          style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
                {getInvolved.cta.heading}
              </h3>
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                {getInvolved.cta.description}
              </p>
            </div>
            <div ref={rolesRef} className={`tw-roles flex flex-col gap-6 ${rolesOn ? "is-on" : ""}`}>
              {getInvolved.opportunities.map((item, i) => (
                <div
                  key={item.label}
                  className="tw-roles-item flex flex-col gap-2"
                  style={{ "--delay": `${i * ROLE_STAGGER_MS}ms` } as CSSProperties}
                >
                  {i > 0 && (
                    <div
                      className="tw-roles-divider h-px w-full"
                      style={{
                        backgroundColor: "var(--color-stroke-subtle)",
                        "--delay": `${(i - 1) * ROLE_STAGGER_MS}ms`,
                      } as CSSProperties}
                    />
                  )}
                  {/* Hover nudge/dim/arrow live here, one level in from
                      .tw-roles-item, so they never fight that element's own
                      entrance-animation transform. An <a>, not a <div> — the
                      whole row opens the same form as the CTA button below. */}
                  <a
                    href={`${getInvolved.cta.ctaHref}?role=${item.id}`}
                    className="tw-roles-item-inner flex flex-col gap-2 no-underline"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="tw-roles-item-kicker text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                        {item.label.toUpperCase()}
                      </p>
                      <ArrowIcon className="tw-roles-item-arrow size-4 shrink-0 text-[var(--color-accent-coral)]" />
                    </div>
                    <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                      {item.description}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <ButtonPrimary href={getInvolved.cta.ctaHref} className="self-start">
            {getInvolved.cta.ctaLabel}
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

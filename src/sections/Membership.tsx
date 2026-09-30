import { membership } from "../data/membership";
import { ButtonPrimary } from "../components/Button";
import { CircleCheck, SparklesIcon } from "../components/icons";

// Membership "Container" (node 406:7625).
export function Membership() {
  return (
    <section id="membership" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-100)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
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

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-[40px] font-semibold leading-[1] tracking-[-1px] sm:text-[48px] sm:leading-[52px]" style={{ color: "var(--color-text-primary)" }}>
                  {membership.price}
                </span>
                <span className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
                  {membership.period}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SparklesIcon className="size-4" />
                <span className="text-[14px] font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  {membership.savingsNote}
                </span>
              </div>
            </div>

            <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
              {membership.description}
            </p>

            <ButtonPrimary href="#membership" className="self-start">
              {membership.ctaLabel}
            </ButtonPrimary>
          </div>

          <div
            className="flex flex-col gap-6 rounded-2xl p-8 shadow-[var(--shadow-subtle)]"
            style={{ backgroundColor: "var(--color-warm-0)" }}
          >
            <h3 className="text-heading-3" style={{ color: "var(--color-warm-1000)" }}>
              {membership.benefitsHeading}
            </h3>
            <ul className="flex flex-col gap-5">
              {membership.benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-3">
                  <CircleCheck className="mt-1 size-5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="text-body-large" style={{ color: "var(--color-text-primary)" }}>
                      {benefit.title}
                    </p>
                    <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

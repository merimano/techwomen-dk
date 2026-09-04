import { getInvolved } from "../data/getInvolved";
import { ButtonPrimary } from "../components/Button";

export function GetInvolved() {
  return (
    <section id="get-involved" className="px-6 py-16 sm:px-10 sm:py-24" style={{ backgroundColor: "var(--color-warm-50)" }}>
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
            <div className="flex flex-col gap-6">
              {getInvolved.opportunities.map((item, i) => (
                <div key={item.label} className="flex flex-col gap-2">
                  {i > 0 && <div className="h-px w-full" style={{ backgroundColor: "var(--color-stroke-subtle)" }} />}
                  <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                    {item.label.toUpperCase()}
                  </p>
                  <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ButtonPrimary href="#membership">{getInvolved.cta.ctaLabel}</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

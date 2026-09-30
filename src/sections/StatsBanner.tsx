import { stats } from "../data/stats";

export function StatsBanner() {
  return (
    <section
      id="events"
      className="border-y"
      style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-16 sm:px-10 lg:grid-cols-4 lg:gap-x-8 lg:px-20">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
            <p
              className="text-[40px] font-bold leading-[1] tracking-[-1px] sm:text-[56px] lg:text-[72px] lg:leading-[80px] lg:tracking-[-2px]"
              style={{ color: "var(--color-accent-coral)" }}
            >
              {stat.value}
            </p>
            <p className="text-kicker" style={{ color: "var(--color-text-secondary)" }}>
              {stat.label.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

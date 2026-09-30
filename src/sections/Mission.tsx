import { mission } from "../data/mission";

export function Mission() {
  return (
    <section className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-100)" }}>
      <div className="mx-auto flex max-w-4xl flex-col gap-6 lg:px-10">
        <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
          {mission.kicker}
        </p>
        <p
          className="text-[26px] font-semibold leading-[36px] tracking-[-0.3px] sm:text-heading-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          {mission.statement}
        </p>
      </div>
    </section>
  );
}

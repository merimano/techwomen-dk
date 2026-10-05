import { eventsIntro, featuredEvent, upcomingEvents, calendarWidget } from "../data/events";
import { SectionHeader } from "../components/SectionHeader";
import { SpeakerCard } from "../components/SpeakerCard";
import { ButtonPrimary } from "../components/Button";
import { LogoDot } from "../components/icons";

// Section_Events (Figma node 285:5230) — header, the featured-event hero
// card (panel-hero-variation-3), and the upcoming-events calendar widget.
export function Events() {
  return (
    <section id="calendar" className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <SectionHeader kicker={eventsIntro.kicker.toUpperCase()} title={eventsIntro.title} description={eventsIntro.description} />

        {/* Desktop/lg featured-event hero card (panel-hero-variation-3). */}
        <div
          className="hidden flex-col gap-10 rounded-[24px] border p-6 shadow-[var(--shadow-subtle)] sm:p-14 lg:flex"
          style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-100)" }}
        >
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="flex w-full max-w-[720px] flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <LogoDot className="size-4" />
                <p className="text-[16px] font-extrabold" style={{ color: "var(--color-text-primary)" }}>
                  TechWomen DK
                </p>
              </div>
              <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                {featuredEvent.badge}
              </p>
              <h3 className="text-heading-1" style={{ color: "var(--color-warm-900)" }}>
                {featuredEvent.title}
              </h3>
            </div>
            <div className="flex w-full flex-col gap-2 lg:w-[360px]">
              <p className="text-body" style={{ color: "var(--color-warm-900)" }}>
                {featuredEvent.tag}
              </p>
              <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
                {featuredEvent.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            {featuredEvent.speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>

          <div
            className="flex flex-col items-start gap-4 border-t pt-4 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--color-stroke-subtle)" }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-10">
              <p className="text-[16px] font-bold" style={{ color: "var(--color-warm-900)" }}>
                {featuredEvent.location}
              </p>
              <p className="text-[16px] font-bold" style={{ color: "var(--color-text-secondary)" }}>
                {featuredEvent.date}
              </p>
            </div>
            <ButtonPrimary href="#membership">{featuredEvent.ctaLabel}</ButtonPrimary>
          </div>
        </div>

        {/* Below-lg featured-event card (Figma node 630:677) — no logo mark,
            smaller heading, speakers scroll horizontally, footer stacks with
            a full-width CTA. */}
        <div
          className="flex flex-col gap-6 rounded-[8px] border p-6 shadow-[var(--shadow-subtle)] lg:hidden"
          style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
        >
          <div className="flex flex-col items-start gap-3">
            <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
              {featuredEvent.badge}
            </p>
            <h3 className="text-heading-3" style={{ color: "var(--color-warm-900)" }}>
              {featuredEvent.title}
            </h3>
            <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
              {featuredEvent.description}
            </p>
          </div>

          <div className="h-px w-full" style={{ backgroundColor: "var(--color-stroke-subtle)" }} />

          <div className="-mx-6 overflow-x-auto px-6">
            <div className="flex gap-3">
              {featuredEvent.speakers.map((speaker) => (
                <div key={speaker.name} className="w-[217.6px] shrink-0">
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <p className="text-[16px] font-bold" style={{ color: "var(--color-warm-900)" }}>
              {featuredEvent.location}
            </p>
            <p className="text-[13px] font-medium tracking-[0.2px]" style={{ color: "var(--color-text-secondary)" }}>
              {featuredEvent.date}
            </p>
          </div>
          <ButtonPrimary href="#membership" className="w-full text-center">
            {featuredEvent.ctaLabel}
          </ButtonPrimary>
        </div>

        <div
          className="flex flex-col gap-4 rounded-[var(--radius-md)] border p-6"
          style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
        >
          <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
            {calendarWidget.kicker.toUpperCase()}
          </p>
          <div>
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex items-center gap-4 border-b py-3 last:border-b-0"
                style={{ borderColor: "var(--color-stroke-subtle)" }}
              >
                <div
                  className="flex w-12 shrink-0 flex-col items-center gap-0 rounded-[var(--radius-md)] p-2.5 font-bold"
                  style={{ backgroundColor: "var(--color-teal-deep-100)", color: "var(--color-teal-700)" }}
                >
                  <p className="text-[11px]">{event.month}</p>
                  <p className="text-[16px]">{event.day}</p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="truncate text-[15px] font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {event.title}
                  </p>
                  <p className="truncate text-[13px]" style={{ color: "var(--color-text-secondary)" }}>
                    {event.time} · {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { sponsorshipIntro, sponsorshipTiers } from "../data/sponsorship";
import { TierCard } from "../components/TierCard";
import { ButtonSecondary } from "../components/Button";

export function Sponsorship() {
  return (
    <section id="sponsorship" className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:px-10">
        <div className="flex max-w-3xl flex-col items-start gap-6 text-left">
          <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
            {sponsorshipIntro.kicker}
          </p>
          <h2 className="text-heading-1" style={{ color: "var(--color-text-primary)" }}>
            {sponsorshipIntro.title}
          </h2>
          <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
            {sponsorshipIntro.pitch}
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {sponsorshipTiers.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <ButtonSecondary href={sponsorshipIntro.deckCtaHref} target="_blank" rel="noopener noreferrer">
              {sponsorshipIntro.deckCtaLabel}
            </ButtonSecondary>
            <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
              {sponsorshipIntro.deckNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

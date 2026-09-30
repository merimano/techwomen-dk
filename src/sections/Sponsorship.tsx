import { sponsorshipIntro, sponsorshipTiers } from "../data/sponsorship";
import { SectionHeader } from "../components/SectionHeader";
import { TierCard } from "../components/TierCard";

export function Sponsorship() {
  return (
    <section id="sponsorship" className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 lg:px-10">
        <SectionHeader kicker={sponsorshipIntro.kicker} title={sponsorshipIntro.title} description={sponsorshipIntro.description} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sponsorshipTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} ctaLabel={sponsorshipIntro.ctaLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}

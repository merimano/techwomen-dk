import type { SponsorshipTier } from "../data/sponsorship";

// Tier_Card_Community/Growth/Impact (Figma nodes 817:888, 817:891, 817:894).
export function TierCard({ tier }: { tier: SponsorshipTier }) {
  return (
    <div
      className="flex h-full flex-1 flex-col gap-4 rounded-[var(--radius-md)] border p-8"
      style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-50)" }}
    >
      <p className="text-heading-2" style={{ color: "var(--color-text-primary)" }}>
        {tier.name}
      </p>
      <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
        {tier.description}
      </p>
    </div>
  );
}

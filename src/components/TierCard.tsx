import type { SponsorshipTier } from "../data/sponsorship";
import "./tier-card.css";

// Tier_Card_Community/Growth/Impact (Figma nodes 817:888, 817:891, 817:894).
// Hover: lifts 4px, shadow deepens from Subtle to Warm, border tints coral.
// The whole card opens `href` — the deck request form, tagged with this tier.
export function TierCard({ tier, href }: { tier: SponsorshipTier; href: string }) {
  return (
    <a
      href={href}
      className="tw-tier-card-surface flex h-full flex-1 flex-col gap-4 rounded-[var(--radius-md)] border p-8 no-underline"
      style={{
        borderColor: "var(--color-stroke-subtle)",
        backgroundColor: "var(--color-warm-50)",
        boxShadow: "var(--shadow-subtle)",
      }}
    >
      <p className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
        {tier.name}
      </p>
      <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
        {tier.description}
      </p>
    </a>
  );
}

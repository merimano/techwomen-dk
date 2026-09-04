import type { SponsorshipTier } from "../data/sponsorship";
import { ButtonSecondary } from "./Button";
import { CircleCheck } from "./icons";

// One parameterized sponsorship-tier card, mapped over
// src/data/sponsorship.ts — replaces the TierCard/TierCard1/TierCard2
// duplicated one-offs Figma Make generated for the three pricing tiers.
export function TierCard({ tier, ctaLabel }: { tier: SponsorshipTier; ctaLabel: string }) {
  return (
    <div
      className="flex h-full flex-1 flex-col gap-10 rounded-[var(--radius-md)] border p-10"
      style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-50)" }}
    >
      <div className="flex flex-col gap-3">
        <p className="text-kicker" style={{ color: "var(--color-text-primary)" }}>
          {tier.name}
        </p>
        <p className="text-[36px] font-semibold leading-[40px] tracking-[-0.5px]" style={{ color: "var(--color-text-primary)" }}>
          {tier.price}
        </p>
        <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
          {tier.description}
        </p>
      </div>
      <div className="h-px w-full" style={{ backgroundColor: "var(--color-stroke-subtle)" }} />
      <ul className="flex flex-1 flex-col gap-4">
        {tier.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <CircleCheck className="mt-0.5 size-[18px] shrink-0" />
            <span className="flex-1 text-[15px] leading-[22px]" style={{ color: "var(--color-text-primary)" }}>
              {benefit}
            </span>
          </li>
        ))}
      </ul>
      <ButtonSecondary href="mailto:hello@techwomencph.dk?subject=Sponsorship%20inquiry">
        {ctaLabel}
      </ButtonSecondary>
    </div>
  );
}

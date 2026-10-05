// Source: Figma "Section_Sponsorship" (node 285:5288); tier cards from
// Tier_Card_Community/Growth/Impact (nodes 817:888, 817:891, 817:894).
export interface SponsorshipTier {
  name: string;
  description: string;
}

export const sponsorshipIntro = {
  kicker: "Partnerships",
  title: "Join us in shaping a more inclusive and innovative tech future",
  // Sponsorship_Pitch (Figma node 817:884). Its second paragraph (pricing/
  // deck details) was dropped — that's now covered by the CTA block below.
  pitch: "This community brings together women across engineering, product, design, and leadership roles in Copenhagen. Companies partner with us to reach a concentrated, engaged audience of local talent, build employer brand, and support a more inclusive tech ecosystem.",
  // Sponsorship_CTA (Figma node 817:897).
  deckCtaLabel: "Request our partner deck",
  deckNote: "Full tiers, pricing, and activation details are included in the PDF.",
};

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Community Partner",
    description: "Support local events and community visibility.",
  },
  {
    name: "Growth Partner",
    description: "Host workshops and build a reliable local talent pipeline.",
  },
  {
    name: "Impact Partner",
    description: "Drive strategic diversity impact and technical recruiting.",
  },
];

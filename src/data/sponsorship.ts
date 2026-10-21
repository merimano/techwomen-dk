// Source: Figma "Section_Sponsorship" (node 285:5288); tier cards from
// Tier_Card_Community/Growth/Impact (nodes 817:888, 817:891, 817:894).
export interface SponsorshipTier {
  /** Used in `/partner?tier=<id>` so the request records which tier was clicked. */
  id: string;
  name: string;
  description: string;
}

export const sponsorshipIntro = {
  kicker: "Partnerships",
  title: "Join us in shaping a more inclusive and innovative tech future",
  // Sponsorship_Pitch (Figma node 817:884). Its second paragraph (pricing/
  // deck details) was dropped — that's now covered by the CTA block below.
  pitch: "This community brings together women across engineering, product, design, and leadership roles across Denmark. Companies partner with us to reach a concentrated, engaged audience of local talent, build employer brand, and support a more inclusive tech ecosystem.",
  // Sponsorship_CTA (Figma node 817:897).
  deckCtaLabel: "Request our partner deck",
  // Opens the on-site request form (src/pages/PartnerPage.tsx).
  // Replaced the old Typeform (fccjex7fdek.typeform.com/to/tfcjXRxG).
  deckCtaHref: "/partner",
  deckNote: "Full tiers, pricing, and activation details are included in the PDF.",
};

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    id: "community",
    name: "Community Partner",
    description: "Support local events and community visibility.",
  },
  {
    id: "growth",
    name: "Growth Partner",
    description: "Host workshops and build a reliable local talent pipeline.",
  },
  {
    id: "impact",
    name: "Impact Partner",
    description: "Drive strategic diversity impact and technical recruiting.",
  },
];

// Copy for the /partner page (partner deck request form).
export const partnerPage = {
  documentTitle: "Partner with us — TechWomen DK",
  kicker: "Partnerships",
  title: "Partner with us",
  intro:
    "Leave your details and we'll send you our partner deck, with full tiers, pricing and activation details.",
  consentText:
    "I agree that TechWomen DK stores these details to send me the partner deck and follow up about partnering. I can ask to have them deleted at any time.",
  submitLabel: "Request the partner deck",
  success: {
    title: "Thank you!",
    body: "We'll send the partner deck to your inbox shortly and look forward to talking.",
  },
};

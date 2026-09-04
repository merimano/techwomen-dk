// Source: Figma "Section_Sponsorship" (node 285:5288).
export interface SponsorshipTier {
  name: string;
  price: string;
  description: string;
  benefits: string[];
}

export const sponsorshipIntro = {
  kicker: "Partnerships",
  title: "Join us in shaping a more inclusive and innovative tech future",
  description:
    "Empower women in technology while building brand recognition, gaining exclusive recruitment access, and showcasing your dedication to equity.",
  ctaLabel: "Inquire about sponsorship",
};

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Community Partner",
    price: "15.000 DKK",
    description: "Support our monthly gatherings and secure direct local community visibility.",
    benefits: [
      "Company logo featured on our event banners",
      "Community Slack sponsorship channels",
      "Dedicated mention at quarterly events",
    ],
  },
  {
    name: "Growth Partner",
    price: "40.000 DKK",
    description: "Host technical workshops and build a reliable pipeline to active local talent.",
    benefits: [
      "Everything in Community tier",
      "Opportunity to host 1 technical workshop",
      "Featured job listings in our newsletter",
      "Co-branded social media highlights",
    ],
  },
  {
    name: "Impact Partner",
    price: "85.000 DKK",
    description: "The ultimate pathway for strategic diversity impact and technical recruiting.",
    benefits: [
      "Everything in Growth tier",
      "Annual Mentorship Cohort exclusive sponsor",
      "Dedicated employer branding feature",
      "Direct panelist opportunity at key talks",
    ],
  },
];

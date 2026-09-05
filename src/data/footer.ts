// Source: Figma "Section_Footer" (node 285:5363).
//
// NOTE — token gap: the footer's nav-link color in Figma resolves to a
// variable named `--bright/text-footer` whose fallback (#8c6e62) is a stale
// pre-update hex (see Guidelines.md "Open gaps" — same family of issue as
// the hero/Testimonial_Card stragglers). We use `--color-text-secondary` on
// the dark background here instead, adjusted for contrast; flag the stray
// token to the design-system owner.
export const footer = {
  logoLabel: "TechWomen DK",
  tagline:
    "Copenhagen's premier community backing and elevating local women developers, designers, product leads, and tech entrepreneurs.",
  columns: [
    { heading: "Community", links: ["About", "Events", "Mentorship"] },
    { heading: "Partner", links: ["Sponsors", "Host a workshop", "Apply to speak"] },
    { heading: "Connect", links: ["hello@techwomencph.dk", "Copenhagen, Denmark", "Slack Community"] },
  ],
  copyright: "© 2026 TechWomen DK. All rights reserved.",
  legalLinks: ["Privacy Policy", "GDPR Compliance"],
};

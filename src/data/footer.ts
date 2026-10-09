// Source: Figma "Section_Footer" (node 285:5363).
//
// NOTE — token gap: the footer's nav-link color in Figma resolves to a
// variable named `--bright/text-footer` whose fallback (#8c6e62) is a stale
// pre-update hex (see Guidelines.md "Open gaps" — same family of issue as
// the hero/Testimonial_Card stragglers). We use `--color-text-secondary` on
// the dark background here instead, adjusted for contrast; flag the stray
// token to the design-system owner.
export interface FooterLink {
  label: string;
  href?: string;
}

export const footer = {
  logoLabel: "TechWomen DK",
  tagline:
    "Copenhagen's premier community backing and elevating local women developers, designers, product leads, and tech entrepreneurs.",
  columns: [
    {
      heading: "Community",
      links: [{ label: "About" }, { label: "Events" }, { label: "Mentorship" }] as FooterLink[],
    },
    {
      heading: "Partner",
      links: [
        { label: "Sponsors" },
        { label: "Host a workshop", href: "#get-involved" },
        { label: "Apply to speak" },
      ] as FooterLink[],
    },
    {
      heading: "Connect",
      links: [
        { label: "hello@techwomencph.dk" },
        { label: "Copenhagen, Denmark" },
        { label: "Slack Community" },
      ] as FooterLink[],
    },
  ],
  copyright: "© 2026 TechWomen DK. All rights reserved.",
  legalLinks: ["Privacy Policy", "GDPR Compliance"],
};

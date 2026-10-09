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
  external?: boolean;
}

export const footer = {
  logoLabel: "TechWomen DK",
  tagline: "We back women who build, shape and lead tech in Denmark.",
  columns: [
    {
      heading: "Community",
      links: [
        { label: "About", href: "#about" },
        { label: "Events", href: "#gatherings" },
        { label: "Mentorship", href: "#mentorship-program" },
      ] as FooterLink[],
    },
    {
      heading: "Partner",
      links: [
        { label: "Sponsors", href: "#sponsorship" },
        { label: "Host a workshop", href: "#get-involved" },
        { label: "Apply to speak", href: "#get-involved" },
      ] as FooterLink[],
    },
    {
      heading: "Connect",
      links: [
        { label: "hello@techwomencph.dk" },
        { label: "Copenhagen, Denmark" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/techwomen-cph/", external: true },
      ] as FooterLink[],
    },
  ],
  copyright: "© 2026 TechWomen DK. All rights reserved.",
  legalLinks: ["Privacy Policy", "GDPR Compliance"],
};

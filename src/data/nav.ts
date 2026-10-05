// Source: Figma "Hero_Centered" (node 285:5005), TechWomen Cph Library and Design System file.
export const navLinks = ["About", "Gatherings", "Calendar", "Membership", "Get Involved", "Sponsorship"];

export const hero = {
  titleLines: ["Backing women to shape", "the future of technology."],
  // At 40px on a mobile viewport, "Backing women to shape" doesn't fit on
  // one line — this breaks it into shorter, safely-fitting lines instead.
  mobileTitleLines: ["Backing women", "to shape", "the future of", "technology."],
  subtitleLines: ["Product, design, engineering, data, AI, GTM, founders.", "Join the women shaping tech in Denmark."],
  // The first line's natural wrap on mobile leaves an orphaned "GTM,
  // founders." on its own short row — this splits it at a more balanced
  // point instead.
  mobileSubtitleLines: [
    "Product, design, engineering,",
    "data, AI, GTM, founders.",
    "Join the women shaping",
    "tech in Denmark.",
  ],
  ctaLabel: "Join the community",
};

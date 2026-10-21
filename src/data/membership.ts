// Source: Figma "Membership — Coming soon" (node 861:490).
export const membership = {
  kicker: "Membership · Opening soon",
  titleLines: ["Become a", "TechWomen DK member"],
  description:
    "Membership is currently open to our active participants, and we're opening it to everyone soon. Join the waitlist to be the first to know when you can become a TechWomen DK member.",
  // CTA opens the standalone /waitlist page (src/pages/WaitlistPage.tsx);
  // the same label is used on that page's submit button.
  // Replaced the old Google Form link (forms.gle/5T1vL96VXkDstJQ99).
  ctaLabel: "Join the waitlist",
  ctaHref: "/waitlist",
  visual: [
    {
      src: "/images/membership/community-1.jpg",
      alt: "A packed room of women seated at tables, listening attentively during a TechWomen Cph talk.",
    },
    {
      src: "/images/membership/community-2.jpg",
      alt: "Two women smiling together at a registration desk in front of a wall reading 'Doing Digital Hub Denmark Differently'.",
    },
  ],
};

// Copy for the standalone /waitlist page.
export const waitlistPage = {
  documentTitle: "Join the waitlist — TechWomen DK",
  kicker: "Membership · Opening soon",
  title: "Join the waitlist",
  intro:
    "Membership is currently open to our active participants, and we're opening it to everyone soon. Leave your details and we'll let you know as soon as you can join.",
};

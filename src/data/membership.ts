// Source: Figma Membership "Container" (node 406:7625).
export const membership = {
  kicker: "Membership",
  titleLines: ["Become a", "TechWomen DK member"],
  price: "499 DKK",
  period: "/ år",
  savingsNote: "Save 40% compared to monthly billing",
  description:
    "Join a vibrant community of women in tech across Denmark. Get priority access to events, mentorship matching, a member-only Slack, and a curated quarterly newsletter - all designed to help you grow, connect, and lead.",
  ctaLabel: "Join us",
  benefitsHeading: "Member Benefits",
  benefits: [
    {
      title: "Priority Event Access",
      description: "Never miss out. Get 48-hour early registration before public ticket release.",
    },
    {
      title: "Mentorship Matching",
      description: "Gain access to quarterly cohort applications for our vetted mentorship pathways.",
    },
    {
      title: "Member-Only Slack",
      description: "Connect daily with hundreds of Copenhagen-based developers, founders, and designers.",
    },
    {
      title: "Quarterly Newsletter",
      description: "Curated tech job opportunities, local resources, and member profiles sent directly to you.",
    },
  ],
};

// NOTE — content gap: the project brief asks the signup flow to let members
// share "what they want to get out of the community" and "if/how they want
// to get involved". No such form exists in the audited Figma frames (the
// Container above is pricing/marketing copy with a plain "Join us" button)
// — these fields are built from the brief alone in <SignupForm />.
export const signupPrompts = {
  goalsLabel: "What do you want to get out of TechWomen DK?",
  goalsPlaceholder: "e.g. meet other women in tech, find a mentor, learn AI skills, hire from the community…",
  involvementLabel: "Would you like to get involved beyond attending events?",
  involvementHowLabel: "If so, how? (speaking, mentoring, hosting, volunteering…)",
};

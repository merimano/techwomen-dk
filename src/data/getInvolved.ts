// Source: Figma "get-involved-variant-1" (node 480:8267).
export const getInvolved = {
  kicker: "Opportunities",
  title: "Pay it forward — strengthen women's influence in tech",
  description:
    "Step up, speak out, and help build a stronger tech community in Copenhagen. Mentor the next generation, share your expertise, and champion the women around you.",
  cta: {
    heading: "Ready to take action?",
    description:
      "Whether you want to lead a workshop, join an expert panel, or host a community meetup at your office space, there's a place for your contribution here.",
    ctaLabel: "Get involved",
    // Opens the on-site form (src/pages/GetInvolvedPage.tsx). Each role row
    // links to it with `?role=<id>` so that role is pre-ticked.
    // Replaced the old Typeform (fccjex7fdek.typeform.com/to/qoYAnua4).
    ctaHref: "/get-involved",
  },
  opportunities: [
    {
      id: "panel-speaker",
      label: "01 / Panel speaker",
      description: "Step onto the stage and join unvarnished panel discussions, fireside chats, and Q&A sessions.",
    },
    {
      id: "ai-masterteacher",
      label: "02 / AI masterteacher",
      description: "Design and teach hands-on workshops or masterclasses to shape the next practitioner wave.",
    },
    {
      id: "event-host",
      label: "03 / Event host",
      description: "Open your workspace to the community for vibrant networking nights or hackathons.",
    },
    {
      id: "open-contribution",
      label: "04 / Open contribution",
      description:
        "Have a skill, idea or resource that doesn't fit the roles above? Tell us, and we'll find the right place for it together.",
    },
  ],
};

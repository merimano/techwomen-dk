// Copy and answer options for the /get-involved form
// (src/components/GetInvolvedForm.tsx). Change wording here, not in JSX.
// Role ids must match `getInvolved.opportunities[].id`.
export const getInvolvedPage = {
  documentTitle: "Get involved — TechWomen DK",
  kicker: "Opportunities",
  title: "Get involved",
  intro:
    "Tell us a bit about yourself and how you'd like to contribute. It takes about two minutes, and we'll get back to you personally.",
};

export const getInvolvedForm = {
  steps: ["About you", "How you'd like to help", "Details", "Send"],
  fields: [
    "Engineering",
    "Product",
    "Design",
    "Data & AI",
    "Go-to-market",
    "Founder",
    "Other",
  ],
  roles: [
    { id: "panel-speaker", label: "Panel speaker", hint: "Panels, fireside chats and Q&As" },
    { id: "ai-masterteacher", label: "AI masterteacher", hint: "Hands-on workshops and masterclasses" },
    { id: "event-host", label: "Event host", hint: "Open your workspace for an event" },
    { id: "open-contribution", label: "Open contribution", hint: "Another skill, idea or resource" },
  ],
  topics: [
    "AI & machine learning",
    "Product & design",
    "Engineering",
    "Leadership & career growth",
    "Entrepreneurship",
    "Data",
    "Other",
  ],
  experience: ["Early career (0–3 yrs)", "Mid-level (4–9 yrs)", "Senior (10+ yrs)"],
  availability: ["Once a year", "A few times a year", "Regularly"],
  consentText:
    "I agree that TechWomen DK stores my details to contact me about getting involved. I can ask to have them deleted at any time.",
  success: {
    title: "Thank you for stepping up!",
    body: "We've got your details and will be in touch soon to find the right way for you to contribute.",
  },
};

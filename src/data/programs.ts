// Source: Figma "Section_About" (node 285:5142).
//
// NOTE — content gap: the project brief lists "Networking App" as one of our
// five current activities, but there is no corresponding card in the Figma
// "what we do" section (only Panel Talks, AI Masterclasses, AI Lab, and the
// Mentorship Program exist there today). The entry below is added from the
// brief alone and clearly marked `comingSoon` so it renders with a distinct
// "Coming soon" treatment instead of pretending it's shipped. Flag this to
// whoever owns the Figma file so a real card can be designed for it.
export interface Program {
  kicker: string;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export const programs: Program[] = [
  {
    kicker: "01 / Networking",
    title: "Panel Talks",
    description:
      "Industry leaders share raw, unvarnished insights on scaling, building, and surviving in tech.",
  },
  {
    kicker: "02 / Skill building",
    title: "AI Masterclasses",
    description:
      "Hands-on, highly interactive skill building sessions led by seasoned domain experts.",
  },
  {
    kicker: "03 / AI project support",
    title: "AI Lab",
    description:
      "Hands-on involvement in real community-driven projects — from open-source tools to local tech initiatives that create lasting impact.",
  },
  {
    kicker: "05 / Networking",
    title: "Networking App",
    description:
      "A dedicated app for members to connect, message, and organize meetups between events.",
    comingSoon: true,
  },
];

export const mentorship = {
  kicker: "04 / Mentorship program",
  titleLines: ["Grow your career with", "guidance from senior tech leaders"],
  description:
    "Our structured 6-month mentorship program pairs ambitious mid-level and junior women in tech with experienced leaders, developers, and founders across Denmark. Build strategy, define goals, and expand your professional horizons.",
  notice: "Next application round opens Winter 2027",
};

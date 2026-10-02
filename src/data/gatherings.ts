// Source: Figma "feature-tabs-section" (nodes 658:2331, 658:2338, 658:2356,
// 658:2374, 658:2392) — an interactive tabbed showcase of the same four
// activities listed in data/programs.ts, paired with real event photos.

export const gatheringsIntro = {
  kicker: "Gatherings",
  title: "Four ways to upskill with us",
};

export interface GatheringTab {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  image: string;
}

export const gatheringTabs: GatheringTab[] = [
  {
    id: "panels",
    tabLabel: "Panels",
    title: "Transparent conversations that build your network",
    description: "People doing the work, at every stage, share what they've learned building and scaling in tech.",
    image: "/images/gatherings/panels.png",
  },
  {
    id: "ai-masterclasses",
    tabLabel: "AI Masterclasses",
    title: "Stay ahead on AI in your field",
    description: "Hands-on, highly interactive skill building sessions led by seasoned domain experts.",
    image: "/images/gatherings/ai-masterclasses.jpg",
  },
  {
    id: "ai-lab",
    tabLabel: "AI Lab",
    title: "Bring your AI project. Leave with sharp advice.",
    description:
      "A space for members building an AI product, applying AI tools, or exploring what AI could do — to learn from each other and get real advisory.",
    image: "/images/gatherings/ai-lab.png",
  },
  {
    id: "mentorship-program",
    tabLabel: "Mentorship Program",
    title: "Mentor or be mentored. Both move you forward.",
    description:
      "Our structured 6-month mentorship program pairs ambitious women in tech with experienced leaders, developers, and founders across Denmark.",
    image: "/images/gatherings/mentorship-program.jpg",
  },
];

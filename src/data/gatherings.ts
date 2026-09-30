// Source: Figma "feature-tabs-section" (nodes 658:2331, 658:2338, 658:2356,
// 658:2374, 658:2392) — an interactive tabbed showcase of the same four
// activities listed in data/programs.ts, paired with real event photos.

import { programs } from "./programs";

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

const panelTalks = programs.find((program) => program.title === "Panel Talks")!;

export const gatheringTabs: GatheringTab[] = [
  {
    id: "panels",
    tabLabel: "Panels",
    title: "Panel that foster transparent experiences and supports network building",
    description: panelTalks.description,
    image: "/images/gatherings/panels.png",
  },
  {
    id: "ai-masterclasses",
    tabLabel: "AI Masterclasses",
    title: "Hands-on, highly interactive skill building sessions led by seasoned domain experts",
    description: "Hands-on, highly interactive skill building sessions led by seasoned domain experts.",
    image: "/images/gatherings/ai-masterclasses.jpg",
  },
  {
    id: "ai-lab",
    tabLabel: "AI Lab",
    title: "Hands-on involvement in real community-driven projects",
    description:
      "Hands-on involvement in real community-driven projects - from open-source tools to local tech initiatives.",
    image: "/images/gatherings/ai-lab.png",
  },
  {
    id: "mentorship-program",
    tabLabel: "Mentorship Program",
    title: "Grow your career with guidance from senior tech leaders",
    description:
      "Our structured 6-month mentorship program pairs ambitious mid-level and junior women in tech with experienced leaders, developers, and founders across Denmark.",
    image: "/images/gatherings/mentorship-program.jpg",
  },
];

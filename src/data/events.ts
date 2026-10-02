// Source: Figma "Section_Events" (node 285:5230).
export const eventsIntro = {
  kicker: "On the calendar",
  title: "Events tailored for genuine growth and community",
  description:
    "We believe that when women are supported with genuine pathways and strong peer networks, they redefine what is possible in tech.",
};

export interface Speaker {
  name: string;
  role: string;
  image: string;
}

export const featuredEvent = {
  badge: "ANNUAL COPENHAGEN TECH PANEL — DEC 11",
  title: "The Cost of Keeping It Together",
  tag: "/ Mental Sustainability",
  description:
    "An unscripted dissection of tech burnout, emotional labor, and building mental sustainability in high-growth roles. Held live at Marriott Café.",
  speakers: [
    { name: "Sarah Chen", role: "VP Engineering", image: "/images/events/speakers/sarah-chen.png" },
    { name: "Marcus Lindgren", role: "Head of People", image: "/images/events/speakers/marcus-lindgren.png" },
    { name: "Dr. Amira Osei", role: "Psychologist & Author", image: "/images/events/speakers/amira-osei.png" },
    { name: "Jonas Pettersson", role: "Staff Engineer", image: "/images/events/speakers/jonas-pettersson.png" },
    { name: "Priya Sharma", role: "Founder, Burnout Lab", image: "/images/events/speakers/priya-sharma.png" },
  ] satisfies Speaker[],
  location: "Gammel Strand, Copenhagen",
  date: "DECEMBER 11, 2026 · 10:00",
  ctaLabel: "Reserve your spot",
};

export interface UpcomingEvent {
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    month: "DEC",
    day: "11",
    title: "The Cost of Keeping It Together",
    time: "18:30",
    location: "Matrikel1 Café, Gammel Strand",
  },
  {
    month: "JAN",
    day: "15",
    title: "Negotiating Your Worth: Tech Compensation",
    time: "19:00",
    location: "Founders House, Copenhagen",
  },
];

export const calendarWidget = {
  kicker: "Calendar",
};

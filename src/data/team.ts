// Source: Figma "Section_Team" (node 285:5193). Real board members —
// rendered here as one data-driven TeamCard component rather than the
// TeamCard/TeamCard1-4 duplicated one-offs Figma Make generated (see
// Guidelines.md, "Responsiveness & completeness").
//
// Photos live in public/images/team/. All five were cut out and placed on
// the same --color-warm-200 (#ece9e6) background so the row reads as one set.
export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: "Meriem Manouchi",
    role: "Founder",
    photo: "/images/team/meriem-manouchi.jpeg",
    linkedin: "https://www.linkedin.com/in/meriemmanouchi/",
  },
  {
    name: "Bianca Negrea",
    role: "Board Member & Event Lead",
    photo: "/images/team/bianca-negrea.png",
    linkedin: "https://www.linkedin.com/in/bianca-denisa-negrea/",
  },
  {
    name: "Cecilia Battinelli",
    role: "Board Member & AI Lab Lead",
    photo: "/images/team/cecilia-battinelli.jpeg",
    linkedin: "https://www.linkedin.com/in/cecilia-battinelli-b65105120/",
  },
  {
    name: "Ayshe Dzambazova",
    role: "Board Member & Mentorship Program Lead",
    photo: "/images/team/ayshe-dzambazova.png",
    linkedin: "https://www.linkedin.com/in/ayshe-dzhambazova/",
  },
  {
    name: "Silja Sundstein",
    role: "Board Member & Treasurer",
    photo: "/images/team/silja-sundstein.jpeg",
    linkedin: "https://www.linkedin.com/in/silja-sundstein-a04069107/",
  },
  {
    name: "Candela Glikin",
    role: "Mentorship Program Events",
    photo: "/images/team/candela-glikin.png",
    linkedin: "https://www.linkedin.com/in/candela-glikin/",
  },
  {
    name: "Alina Hrom",
    role: "Social Media Lead",
    photo: "/images/team/alina-hrom.png",
    linkedin: "https://www.linkedin.com/in/alinagrommarketing/",
  },
];

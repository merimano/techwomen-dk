// Source: Figma "Section_Team" (node 285:5193). Real board members —
// rendered here as one data-driven TeamCard component rather than the
// TeamCard/TeamCard1-4 duplicated one-offs Figma Make generated (see
// Guidelines.md, "Responsiveness & completeness").
export interface TeamMember {
  name: string;
  role: string;
}

export const team: TeamMember[] = [
  { name: "Mareike Bonitz", role: "Founder & Product Leader" },
  { name: "Sofia Andersen", role: "Program Director" },
  { name: "Mie Elmkvist Schneider", role: "Community Lead" },
  { name: "Simone Engbo Hansen", role: "Content & Marketing" },
  { name: "Delfina Millington", role: "Design Lead" },
];

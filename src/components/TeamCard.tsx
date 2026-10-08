import type { TeamMember } from "../data/team";

// Single data-driven component mapped over src/data/team.ts — replaces the
// TeamCard/TeamCard1-TeamCard4 duplicated one-offs Figma Make generated for
// repeated instances (see Guidelines.md, "Responsiveness & completeness").
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative flex h-[260px] w-[220px] shrink-0 flex-col justify-end overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-warm-200)]">
      <img
        src={member.photo}
        alt={`${member.name}, ${member.role}`}
        width={800}
        height={800}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 100%)" }}
      />
      <div className="relative flex flex-col items-center gap-2 px-3 pb-3 pt-2.5 text-center">
        <p className="w-full text-sm font-medium text-white">{member.name}</p>
        <p className="w-full text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-warm-300)]">
          {member.role}
        </p>
      </div>
    </div>
  );
}

import type { TeamMember } from "../data/team";
import { LinkedInIcon } from "./icons";

// Single data-driven component mapped over src/data/team.ts — replaces the
// TeamCard/TeamCard1-TeamCard4 duplicated one-offs Figma Make generated for
// repeated instances (see Guidelines.md, "Responsiveness & completeness").
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative flex h-[260px] w-[220px] shrink-0 flex-col justify-end overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-warm-200)] transition-shadow duration-300 ease-out hover:shadow-[0px_6px_16px_-2px_rgba(0,0,0,0.15)] motion-reduce:transition-none">
      <img
        src={member.photo}
        alt={`${member.name}, ${member.role}`}
        width={800}
        height={800}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
      />
      {/* Two stacked gradients crossfade on hover (Figma node 610:618) — a
          plain `background` transition can't reliably interpolate between
          two different multi-stop gradients across browsers. */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/55 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none"
      />
      <div className="relative flex flex-col items-center gap-2 px-3 pb-3 pt-2.5 text-center">
        <p className="w-full text-sm font-medium text-white">{member.name}</p>
        <p className="w-full text-[10px] font-bold uppercase tracking-[2px] text-[var(--color-warm-300)]">
          {member.role}
        </p>
        {/* LinkedIn chip (Figma node 610:612) — the icon slot there is an
            empty placeholder box in the file (no real vector exported), so
            this uses the hand-authored LinkedInIcon from icons.tsx instead
            of leaving a blank square.

            The outer wrapper collapses to zero height at rest (rather than
            just opacity:0 on the link) so it reserves no layout space —
            otherwise the name/role above would sit higher than the actual
            default-state design (node 590:415), which has no chip at all. */}
        <div className="max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:mt-1 group-hover:max-h-10 motion-reduce:transition-none">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex translate-y-1 items-center gap-1 rounded-[6px] bg-white/15 px-2 py-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
          >
            <LinkedInIcon className="size-[14px] text-white/80" />
            <span className="text-[11px] font-medium text-white/90">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

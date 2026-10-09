import { team } from "../data/team";
import { TeamCard } from "../components/TeamCard";
import { SectionHeader } from "../components/SectionHeader";

export function Team() {
  return (
    <section id="team" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-50)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <SectionHeader
          kicker="The team"
          title="Powered by our community"
          description="Everything we do is shaped by the people who show up — as board members, gathering hosts, teachers, mentors, attendees, and advocates spreading the word. Our strength lies in every contribution, big and small."
        />
        {/* Fixed-width cards stay on one row and scroll horizontally at
            every breakpoint (Figma node 630:740), rather than wrapping. */}
        <div className="flex gap-4 overflow-x-auto">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

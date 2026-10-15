import { team } from "../data/team";
import { TeamCard } from "../components/TeamCard";
import { SectionHeader } from "../components/SectionHeader";
import "./team-marquee.css";

// How much of the row softens into the background at each edge.
const EDGE_FADE = "40px";
const maskImage = `linear-gradient(to right, transparent, black ${EDGE_FADE}, black calc(100% - ${EDGE_FADE}), transparent)`;

export function Team() {
  return (
    <section id="team" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-50)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <SectionHeader
          kicker="The team"
          title="Powered by our community"
          description="Everything we do is shaped by the people who show up — as board members, gathering hosts, teachers, mentors, attendees, and advocates spreading the word. Our strength lies in every contribution, big and small."
        />
        {/* Infinite marquee: the track holds two back-to-back copies of the
            team and animates left by exactly one copy's width (-50% of the
            track's own, doubled width), looping seamlessly forever. Pauses
            on hover, and sits still under prefers-reduced-motion. The
            second copy is aria-hidden so screen readers only hear each
            member once. Spacing is a margin on each card rather than a
            flex `gap`, so duplicating the sequence can't introduce a
            half-gap seam at the loop point. */}
        <div className="tw-marquee" style={{ WebkitMaskImage: maskImage, maskImage }}>
          <div className="tw-marquee-track flex">
            {team.map((member) => (
              <div key={member.name} className="mr-4">
                <TeamCard member={member} />
              </div>
            ))}
            <div className="flex" aria-hidden="true">
              {team.map((member) => (
                <div key={`${member.name}-clone`} className="mr-4">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

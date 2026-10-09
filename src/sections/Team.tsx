import { useEffect, useRef, useState } from "react";
import { team } from "../data/team";
import { TeamCard } from "../components/TeamCard";
import { SectionHeader } from "../components/SectionHeader";

// How much of the row softens into the background at each scrollable edge.
const EDGE_FADE = "40px";

export function Team() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 0);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Only fade an edge while there's more row to scroll past it — a card
  // sitting flush at the start/end of the row stays fully visible.
  const leftStop = atStart ? "0px" : EDGE_FADE;
  const rightStop = atEnd ? "100%" : `calc(100% - ${EDGE_FADE})`;
  const maskImage = `linear-gradient(to right, transparent, black ${leftStop}, black ${rightStop}, transparent)`;

  return (
    <section id="team" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-50)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <SectionHeader
          kicker="The team"
          title="Powered by our community"
          description="Everything we do is shaped by the people who show up — as board members, gathering hosts, teachers, mentors, attendees, and advocates spreading the word. Our strength lies in every contribution, big and small."
        />
        {/* Fixed-width cards stay on one row and scroll horizontally at
            every breakpoint (Figma node 630:740), rather than wrapping. A
            scroll-aware mask softens cards into the background at whichever
            edge still has more row to scroll, instead of hard-clipping them. */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto"
          style={{ WebkitMaskImage: maskImage, maskImage }}
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

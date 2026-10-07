import { programs } from "../data/programs";
import { FormatCard } from "../components/FormatCard";
import type { Variant } from "../components/CardArt";
import { SectionHeader } from "../components/SectionHeader";

// Card art variant per program, in display order.
const cardArtVariants: Variant[] = ["disciplines", "denmark", "wireframe"];

// Section_About (node 285:5142) — the format cards.
export function WhatWeDo() {
  return (
    <section id="about" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-50)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <SectionHeader
          kicker="What we do"
          title="Women in every tech role, building what comes next."
          description="We back women with mentors, skills and a network of peers, so more of them lead in tech."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <FormatCard key={program.title} program={program} artVariant={cardArtVariants[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}

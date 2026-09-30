import { programs, mentorship } from "../data/programs";
import { FormatCard } from "../components/FormatCard";
import { SectionHeader } from "../components/SectionHeader";
import { ImagePlaceholder } from "../components/ImagePlaceholder";

// Section_About (node 285:5142) — the 4 format cards plus the larger
// Mentorship Program feature panel. See data/programs.ts for the note on
// the "Networking App" content gap (in the project brief, not yet in Figma).
export function WhatWeDo() {
  return (
    <section id="about" className="px-6 py-16 sm:px-10" style={{ backgroundColor: "var(--color-warm-50)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:px-10">
        <SectionHeader
          kicker="What we do"
          title="Supporting women across all roles in tech to shape, build, and lead the future of technology."
          description="We believe that when women are supported with genuine pathways and strong peer networks, they redefine what is possible in tech."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <FormatCard key={program.title} program={program} />
          ))}
        </div>

        <div
          className="flex flex-col overflow-hidden rounded-2xl border shadow-[var(--shadow-subtle)] lg:flex-row"
          style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
        >
          <div className="flex flex-col gap-10 px-6 py-10 sm:px-10 sm:py-16 lg:flex-1 lg:pl-12 lg:pr-20">
            <div className="flex flex-col gap-6">
              <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                {mentorship.kicker}
              </p>
              <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
                {mentorship.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
                {mentorship.description}
              </p>
            </div>
            <p className="text-body" style={{ color: "var(--color-text-decorative)" }}>
              {mentorship.notice}
            </p>
          </div>
          <div className="h-64 sm:h-80 lg:h-auto lg:flex-1">
            <ImagePlaceholder variant="coral-teal" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

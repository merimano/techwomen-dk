interface SectionHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

// Shared kicker + Heading 1 + Body Large pattern used at the top of most
// sections (Section_About, Section_Team, Section_Sponsorship, ...).
export function SectionHeader({ kicker, title, description, align = "left", light = false }: SectionHeaderProps) {
  return (
    <div
      className={`flex max-w-3xl flex-col gap-6 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
        {kicker}
      </p>
      <h2
        className="text-heading-1"
        style={{ color: light ? "#ffffff" : "var(--color-text-primary)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-body-large" style={{ color: light ? "rgba(255,255,255,0.85)" : "var(--color-text-secondary)" }}>
          {description}
        </p>
      )}
    </div>
  );
}

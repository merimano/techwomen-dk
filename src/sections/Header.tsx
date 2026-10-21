import { useState } from "react";
import { navLinks } from "../data/nav";
import { LogoDot } from "../components/icons";

interface HeaderProps {
  /** Prefix for the in-page section links. "" on the home page; "/" on
   *  other pages (e.g. /waitlist) so links jump back to the home sections. */
  basePath?: string;
}

const sectionId = (link: string) => link.toLowerCase().replace(/\s+/g, "-");

export function Header({ basePath = "" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-20">
        <a href={basePath ? basePath : "#top"} className="flex items-center gap-3">
          <LogoDot className="size-4" />
          <span className="text-[16px] font-extrabold" style={{ color: "var(--color-text-primary)" }}>
            TechWomen DK
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-normal md:flex" style={{ color: "var(--color-text-secondary)" }}>
          {navLinks.map((link) => (
            <a key={link} href={`${basePath}#${sectionId(link)}`} className="hover:text-[var(--color-text-primary)]">
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6" style={{ backgroundColor: "var(--color-text-primary)" }} />
          <span className="h-0.5 w-6" style={{ backgroundColor: "var(--color-text-primary)" }} />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t px-6 py-4 text-sm font-normal md:hidden"
          style={{ borderColor: "var(--color-stroke-subtle)", color: "var(--color-text-secondary)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`${basePath}#${sectionId(link)}`}
              className="py-2"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

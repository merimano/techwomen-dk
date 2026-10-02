import { useState } from "react";
import { navLinks } from "../data/nav";
import { LogoDot } from "../components/icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-20">
        <a href="#top" className="flex items-center gap-3">
          <LogoDot className="size-4" />
          <span className="text-[16px] font-extrabold" style={{ color: "var(--color-text-primary)" }}>
            TechWomen DK
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-normal md:flex" style={{ color: "var(--color-text-secondary)" }}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[var(--color-text-primary)]">
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
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
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

import { footer } from "../data/footer";
import { LogoDot } from "../components/icons";

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-20 sm:px-10 lg:px-20" style={{ backgroundColor: "var(--color-warm-1000)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="flex max-w-xs flex-col gap-6">
            <div className="flex items-center gap-3">
              <LogoDot className="size-4" />
              <span className="text-[20px] font-extrabold text-white">{footer.logoLabel}</span>
            </div>
            <p className="text-[14px] leading-[22px] text-white/80">{footer.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10 text-[14px]">
            {footer.columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <p className="font-bold text-white">{col.heading.toUpperCase()}</p>
                {col.links.map((link) =>
                  link.href ? (
                    <a key={link.label} href={link.href} className="text-white/60 transition-colors hover:text-white/80">
                      {link.label}
                    </a>
                  ) : (
                    <p key={link.label} className="text-white/60">
                      {link.label}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col gap-4 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.legalLinks.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

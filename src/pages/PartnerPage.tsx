import { useEffect, useState } from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PartnerForm } from "../components/PartnerForm";
import { partnerPage } from "../data/sponsorship";

// /partner — partner deck request. The Partnerships section's deck CTA and
// tier cards link here; a card adds `?tier=<id>` so we know what caught
// the company's eye.
export function PartnerPage() {
  const [sent, setSent] = useState(false);
  const [tier] = useState(() => new URLSearchParams(window.location.search).get("tier") ?? undefined);

  useEffect(() => {
    document.title = partnerPage.documentTitle;
  }, []);

  return (
    <div className="flex min-h-full flex-col">
      <Header basePath="/" />
      <main className="flex flex-1 flex-col" style={{ backgroundColor: "var(--color-warm-100)" }}>
        <section className="px-6 py-12 sm:px-10 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-10">
            <a
              href="/#sponsorship"
              className="text-sm font-medium hover:underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              ← Back to home
            </a>
            <div className="flex flex-col gap-6">
              <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                {partnerPage.kicker.toUpperCase()}
              </p>
              {!sent && (
                <>
                  <h1 className="text-heading-1" style={{ color: "var(--color-text-primary)" }}>
                    {partnerPage.title}
                  </h1>
                  <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
                    {partnerPage.intro}
                  </p>
                </>
              )}
            </div>
            <PartnerForm tier={tier} onSuccess={() => setSent(true)} />
          </div>
        </section>
      </main>
      <Footer basePath="/" />
    </div>
  );
}

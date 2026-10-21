import { useEffect, useState } from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { WaitlistForm } from "../components/WaitlistForm";
import { membership, waitlistPage } from "../data/membership";

// /waitlist — standalone, shareable signup page (link it from LinkedIn and
// Meetup posts). The Membership section's CTA points here.
export function WaitlistPage() {
  const photo = membership.visual[0];
  // Once signed up, drop the "Join the waitlist" heading + intro so the
  // confirmation stands on its own.
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    document.title = waitlistPage.documentTitle;
  }, []);

  return (
    <div className="flex min-h-full flex-col">
      <Header basePath="/" />
      <main className="flex flex-1 flex-col" style={{ backgroundColor: "var(--color-warm-100)" }}>
        <section className="px-6 py-12 sm:px-10 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
            <div className="flex flex-col items-start gap-8 lg:w-[560px] lg:shrink-0">
              <a
                href="/"
                className="text-sm font-medium hover:underline"
                style={{ color: "var(--color-text-secondary)" }}
              >
                ← Back to home
              </a>
              <div className="flex flex-col gap-6">
                <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                  {waitlistPage.kicker.toUpperCase()}
                </p>
                {!joined && (
                  <>
                    <h1 className="text-heading-1" style={{ color: "var(--color-text-primary)" }}>
                      {waitlistPage.title}
                    </h1>
                    <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
                      {waitlistPage.intro}
                    </p>
                  </>
                )}
              </div>
              <WaitlistForm showHeading={false} submitLabel={membership.ctaLabel} onSuccess={() => setJoined(true)} />
            </div>

            <div className="w-full max-w-[480px] lg:ml-auto">
              <div
                className="aspect-[4/5] overflow-hidden rounded-[24px] border-[6px] sm:border-8"
                style={{ borderColor: "var(--color-warm-0)", boxShadow: "var(--shadow-large)" }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full scale-110 object-cover object-[35%_center]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer basePath="/" />
    </div>
  );
}

import { useEffect, useState } from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { GetInvolvedForm } from "../components/GetInvolvedForm";
import { getInvolvedPage, getInvolvedForm } from "../data/getInvolvedForm";

// /get-involved — stepped form for speakers, teachers, hosts and other
// contributors. The Get Involved section's CTA and role rows link here;
// a row adds `?role=<id>` so that role arrives pre-ticked.
export function GetInvolvedPage() {
  const [sent, setSent] = useState(false);
  const [initialRoles] = useState(() => {
    const role = new URLSearchParams(window.location.search).get("role");
    return getInvolvedForm.roles.some((r) => r.id === role) ? [role as string] : [];
  });

  useEffect(() => {
    document.title = getInvolvedPage.documentTitle;
  }, []);

  return (
    <div className="flex min-h-full flex-col">
      <Header basePath="/" />
      <main className="flex flex-1 flex-col" style={{ backgroundColor: "var(--color-warm-100)" }}>
        <section className="px-6 py-12 sm:px-10 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-10">
            <a
              href="/#get-involved"
              className="text-sm font-medium hover:underline"
              style={{ color: "var(--color-text-secondary)" }}
            >
              ← Back to home
            </a>
            <div className="flex flex-col gap-6">
              <p className="text-kicker" style={{ color: "var(--color-accent-coral)" }}>
                {getInvolvedPage.kicker.toUpperCase()}
              </p>
              {!sent && (
                <>
                  <h1 className="text-heading-1" style={{ color: "var(--color-text-primary)" }}>
                    {getInvolvedPage.title}
                  </h1>
                  <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
                    {getInvolvedPage.intro}
                  </p>
                </>
              )}
            </div>
            <GetInvolvedForm initialRoles={initialRoles} onSuccess={() => setSent(true)} />
          </div>
        </section>
      </main>
      <Footer basePath="/" />
    </div>
  );
}

import { useState, type FormEvent, type ReactNode } from "react";
import { signupPrompts } from "../data/membership";
import { ButtonPrimary } from "../components/Button";

// Built from the project brief, not from Figma: no signup form exists yet
// in the audited design (see data/membership.ts note on this gap). Captures
// exactly what the brief asks for — what a member wants out of the
// community, and whether/how they want to get involved — alongside the
// standard name/email fields. Wire the onSubmit handler up to whatever
// backend/CRM/Airtable/Mailchimp endpoint TechWomen Cph ends up using.
export function SignupForm() {
  const [wantsToGetInvolved, setWantsToGetInvolved] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real submission endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col gap-2 rounded-[var(--radius-md)] border p-8"
        style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
      >
        <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
          Welcome to TechWomen DK!
        </h3>
        <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
          Thanks for signing up — check your inbox for next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-[var(--radius-md)] border p-6 sm:p-8"
      style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
    >
      <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
        Sign up
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required className="form-input" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required className="form-input" />
        </Field>
      </div>

      <Field label={signupPrompts.goalsLabel} htmlFor="goals">
        <textarea id="goals" name="goals" rows={3} placeholder={signupPrompts.goalsPlaceholder} className="form-input resize-none" />
      </Field>

      <label className="flex items-center gap-3 text-body" style={{ color: "var(--color-text-primary)" }}>
        <input
          type="checkbox"
          checked={wantsToGetInvolved}
          onChange={(e) => setWantsToGetInvolved(e.target.checked)}
          className="size-4"
        />
        {signupPrompts.involvementLabel}
      </label>

      {wantsToGetInvolved && (
        <Field label={signupPrompts.involvementHowLabel} htmlFor="involvementHow">
          <textarea id="involvementHow" name="involvementHow" rows={3} className="form-input resize-none" />
        </Field>
      )}

      <ButtonPrimary type="submit" className="w-full">
        Join us
      </ButtonPrimary>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[14px] font-medium" style={{ color: "var(--color-text-primary)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

import { useState, type FormEvent } from "react";
import { ButtonPrimary } from "./Button";
import "./WaitlistForm.css";

// Membership waitlist. Posts to a Google Apps Script web app that appends a
// row to the board's Google Sheet (script lives in the sheet: Extensions →
// Apps Script). The URL comes from VITE_WAITLIST_ENDPOINT — set it in `.env`
// locally and in Vercel → Settings → Environment Variables for deploys.
const ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT;

const CONSENT_TEXT =
  "I agree that TechWomen DK stores my details to contact me about membership. I can ask to have them deleted at any time.";

type Status = "idle" | "submitting" | "success" | "error";

interface WaitlistFormProps {
  /** Show the form's own "Join the waitlist" heading + intro. Off when the
   *  surrounding section already provides the heading. */
  showHeading?: boolean;
  /** Privacy policy link shown after the consent text. Omitted until the
   *  page exists, so the form never links to a 404. */
  privacyUrl?: string;
  submitLabel?: string;
  /** Called once a signup has been saved — lets the page hide its intro. */
  onSuccess?: () => void;
}

export function WaitlistForm({
  showHeading = true,
  privacyUrl,
  submitLabel = "Join the waitlist",
  onSuccess,
}: WaitlistFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (!ENDPOINT) {
      setStatus("error");
      setErrorMsg("The waitlist isn’t connected yet. Please try again later.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const body = new URLSearchParams({
      fullName: String(data.get("fullName") ?? ""),
      email: String(data.get("email") ?? ""),
      consent: data.get("consent") ? "true" : "false",
      consentText: CONSENT_TEXT,
      company: String(data.get("company") ?? ""), // spam trap
      source: window.location.href,
    });

    try {
      // A form-encoded body avoids a CORS preflight, which Apps Script can't answer.
      const res = await fetch(ENDPOINT, { method: "POST", body });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!json.ok) throw new Error(json.error);
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message === "invalid_email"
          ? "That email address doesn’t look right. Please check it."
          : "Something went wrong. Please try again in a moment.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="waitlist" role="status" aria-live="polite">
        <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
          You’re on the list!
        </h3>
        <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
          We’ll email you as soon as membership opens.
        </p>
      </div>
    );
  }

  return (
    <form className="waitlist" onSubmit={handleSubmit}>
      {showHeading && (
        <>
          <h3 className="text-heading-3" style={{ color: "var(--color-text-primary)" }}>
            Join the waitlist
          </h3>
          <p className="text-body" style={{ color: "var(--color-text-secondary)" }}>
            Be the first to know when membership opens. It takes less than a minute.
          </p>
        </>
      )}

      <div className="waitlist__row">
        <label className="waitlist__field">
          Full name
          <input className="form-input" name="fullName" type="text" autoComplete="name" required maxLength={100} />
        </label>
        <label className="waitlist__field">
          Email
          <input className="form-input" name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>
      </div>

      {/* Spam trap: hidden from people, filled in by bots */}
      <div className="waitlist__trap" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="waitlist__consent">
        <input name="consent" type="checkbox" required />
        <span>
          {CONSENT_TEXT}
          {privacyUrl && (
            <>
              {" "}
              <a href={privacyUrl} target="_blank" rel="noopener noreferrer">
                Read our privacy policy
              </a>
              .
            </>
          )}
        </span>
      </label>

      {status === "error" && (
        <p className="waitlist__error" role="alert">
          {errorMsg}
        </p>
      )}

      <ButtonPrimary type="submit" disabled={status === "submitting"} className="waitlist__submit">
        {status === "submitting" ? "Joining…" : submitLabel}
      </ButtonPrimary>
    </form>
  );
}

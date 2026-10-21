import { useState, type FormEvent } from "react";
import { ButtonPrimary } from "./Button";
import { partnerPage as copy, sponsorshipTiers } from "../data/sponsorship";
import { submitToSheet } from "../lib/submitToSheet";
import "./WaitlistForm.css";

// Partner deck request: name, work email, company. Saves to the "Partners"
// tab of the sheet. Shares its layout styles with the waitlist form.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface PartnerFormProps {
  /** Tier id from `?tier=` (the card the visitor clicked), stored with the request. */
  tier?: string;
  onSuccess?: () => void;
}

export function PartnerForm({ tier, onSuccess }: PartnerFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("organisation") ?? "").trim();

    if (!name || !company) return setError("Fill in your name and company.");
    if (!EMAIL_RE.test(email)) return setError("That email address doesn’t look right. Please check it.");
    if (!data.get("consent")) return setError("Tick the box so we can send you the deck.");

    setError("");
    setStatus("submitting");
    const tierName = sponsorshipTiers.find((t) => t.id === tier)?.name ?? "";
    const result = await submitToSheet("partner", {
      firstName: name,
      email,
      organisation: company,
      tier: tierName,
      consent: "true",
      consentText: copy.consentText,
      company: String(data.get("company") ?? ""), // spam trap
    });
    if (result.ok) {
      setStatus("success");
      onSuccess?.();
    } else {
      setStatus("error");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="waitlist" role="status" aria-live="polite">
        <h2 className="text-heading-2" style={{ color: "var(--color-text-primary)" }}>
          {copy.success.title}
        </h2>
        <p className="text-body-large" style={{ color: "var(--color-text-secondary)" }}>
          {copy.success.body}
        </p>
      </div>
    );
  }

  return (
    <form className="waitlist" onSubmit={handleSubmit} noValidate>
      <label className="waitlist__field" style={{ width: "100%" }}>
        Name
        <input className="form-input" name="name" type="text" autoComplete="name" maxLength={100} />
      </label>
      <div className="waitlist__row">
        <label className="waitlist__field">
          Work email
          <input className="form-input" name="email" type="email" autoComplete="work email" maxLength={254} />
        </label>
        <label className="waitlist__field">
          Company
          <input className="form-input" name="organisation" type="text" autoComplete="organization" maxLength={150} />
        </label>
      </div>

      {/* Spam trap: hidden from people, filled in by bots */}
      <div className="waitlist__trap" aria-hidden="true">
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="waitlist__consent">
        <input name="consent" type="checkbox" />
        <span>{copy.consentText}</span>
      </label>

      {error && (
        <p className="waitlist__error" role="alert">
          {error}
        </p>
      )}

      <ButtonPrimary type="submit" disabled={status === "submitting"} className="waitlist__submit">
        {status === "submitting" ? "Sending…" : copy.submitLabel}
      </ButtonPrimary>
    </form>
  );
}

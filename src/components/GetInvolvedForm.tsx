import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { ButtonPrimary } from "./Button";
import { getInvolvedForm as copy } from "../data/getInvolvedForm";
import { submitToSheet } from "../lib/submitToSheet";
import "./GetInvolvedForm.css";

// Stepped "Get involved" form — one step at a time with a progress bar,
// mostly closed questions. Saves to the "Get involved" tab of the sheet.

interface Answers {
  fullName: string;
  email: string;
  linkedin: string;
  field: string;
  roles: string[];
  topics: string[];
  experience: string;
  availability: string;
  notes: string;
  consent: boolean;
  company: string; // spam trap
}

type Errors = Partial<Record<keyof Answers, string>>;

interface GetInvolvedFormProps {
  /** Role ids to pre-tick (from `?role=` on the page URL). */
  initialRoles?: string[];
  /** Called once the answers have been saved. */
  onSuccess?: () => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LAST_STEP = copy.steps.length - 1;

export function GetInvolvedForm({ initialRoles = [], onSuccess }: GetInvolvedFormProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    fullName: "",
    email: "",
    linkedin: "",
    field: "",
    roles: initialRoles,
    topics: [],
    experience: "",
    availability: "",
    notes: "",
    consent: false,
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const topRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };
  const toggle = (key: "roles" | "topics", value: string) =>
    set(key, answers[key].includes(value) ? answers[key].filter((v) => v !== value) : [...answers[key], value]);

  function validate(s: number): Errors {
    const e: Errors = {};
    if (s === 0) {
      if (!answers.fullName.trim()) e.fullName = "Enter your full name.";
      if (!EMAIL_RE.test(answers.email.trim())) e.email = "Enter a valid email address.";
      if (!answers.linkedin.trim()) e.linkedin = "Paste a link to your LinkedIn profile.";
      else if (!/linkedin\.com\//i.test(answers.linkedin)) e.linkedin = "That doesn't look like a LinkedIn profile link.";
      if (!answers.field) e.field = "Pick the option closest to your field.";
    }
    if (s === 1 && answers.roles.length === 0) e.roles = "Pick at least one way to contribute.";
    if (s === 2) {
      if (answers.topics.length === 0) e.topics = "Pick at least one topic.";
      if (!answers.experience) e.experience = "Pick your experience level.";
      if (!answers.availability) e.availability = "Pick how often you could help.";
    }
    if (s === 3 && !answers.consent) e.consent = "Tick the box so we can store your answers.";
    return e;
  }

  function goTo(next: number) {
    setStep(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    if (step < LAST_STEP) return goTo(step + 1);

    setStatus("submitting");
    const roleLabels = copy.roles.filter((r) => answers.roles.includes(r.id)).map((r) => r.label);
    const result = await submitToSheet("get-involved", {
      fullName: answers.fullName.trim(),
      email: answers.email.trim(),
      linkedin: answers.linkedin.trim(),
      field: answers.field,
      roles: roleLabels.join(", "),
      topics: answers.topics.join(", "),
      experience: answers.experience,
      availability: answers.availability,
      notes: answers.notes.trim(),
      consent: answers.consent ? "true" : "false",
      consentText: copy.consentText,
      company: answers.company,
    });
    if (result.ok) {
      setStatus("success");
      onSuccess?.();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="gi-form" role="status" aria-live="polite">
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
    <form className="gi-form" onSubmit={handleSubmit} noValidate>
      <div ref={topRef} className="gi-progress" aria-label={`Step ${step + 1} of ${copy.steps.length}`}>
        <div className="gi-progress__meta">
          <span>
            Step {step + 1} of {copy.steps.length}
          </span>
          <span>{copy.steps[step]}</span>
        </div>
        <div className="gi-progress__track">
          <div className="gi-progress__bar" style={{ width: `${((step + 1) / copy.steps.length) * 100}%` }} />
        </div>
      </div>

      {step === 0 && (
        <>
          <div className="gi-row">
            <TextField label="Full name" error={errors.fullName}>
              <input
                className="form-input"
                type="text"
                autoComplete="name"
                maxLength={100}
                value={answers.fullName}
                onChange={(e) => set("fullName", e.target.value)}
              />
            </TextField>
            <TextField label="Email" error={errors.email}>
              <input
                className="form-input"
                type="email"
                autoComplete="email"
                maxLength={254}
                value={answers.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </TextField>
          </div>
          <TextField label="LinkedIn profile" error={errors.linkedin}>
            <input
              className="form-input"
              type="url"
              placeholder="linkedin.com/in/your-name"
              maxLength={300}
              value={answers.linkedin}
              onChange={(e) => set("linkedin", e.target.value)}
            />
          </TextField>
          <ChoiceGroup legend="Your field" error={errors.field}>
            {copy.fields.map((f) => (
              <Choice key={f} type="radio" name="field" checked={answers.field === f} onChange={() => set("field", f)}>
                {f}
              </Choice>
            ))}
          </ChoiceGroup>
        </>
      )}

      {step === 1 && (
        <ChoiceGroup legend="How would you like to contribute?" hint="Pick any." error={errors.roles} stacked>
          {copy.roles.map((r) => (
            <Choice
              key={r.id}
              type="checkbox"
              name="roles"
              checked={answers.roles.includes(r.id)}
              onChange={() => toggle("roles", r.id)}
              hint={r.hint}
            >
              {r.label}
            </Choice>
          ))}
        </ChoiceGroup>
      )}

      {step === 2 && (
        <>
          <ChoiceGroup legend="Topics you could share" hint="Pick any." error={errors.topics}>
            {copy.topics.map((t) => (
              <Choice key={t} type="checkbox" name="topics" checked={answers.topics.includes(t)} onChange={() => toggle("topics", t)}>
                {t}
              </Choice>
            ))}
          </ChoiceGroup>
          <ChoiceGroup legend="Experience level" error={errors.experience}>
            {copy.experience.map((x) => (
              <Choice key={x} type="radio" name="experience" checked={answers.experience === x} onChange={() => set("experience", x)}>
                {x}
              </Choice>
            ))}
          </ChoiceGroup>
          <ChoiceGroup legend="How often could you help?" error={errors.availability}>
            {copy.availability.map((x) => (
              <Choice key={x} type="radio" name="availability" checked={answers.availability === x} onChange={() => set("availability", x)}>
                {x}
              </Choice>
            ))}
          </ChoiceGroup>
          <TextField label="Anything else?" optional>
            <textarea
              className="form-input gi-textarea"
              rows={4}
              maxLength={1000}
              placeholder="An idea, a topic you'd love to cover, or a question for us"
              value={answers.notes}
              onChange={(e) => set("notes", e.target.value)}
            />
          </TextField>
        </>
      )}

      {step === 3 && (
        <>
          <Summary answers={answers} />
          <label className="gi-consent">
            <input type="checkbox" checked={answers.consent} onChange={(e) => set("consent", e.target.checked)} />
            <span>{copy.consentText}</span>
          </label>
          {errors.consent && <p className="gi-error">{errors.consent}</p>}
        </>
      )}

      {/* Spam trap: hidden from people, filled in by bots */}
      <div className="gi-trap" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={answers.company} onChange={(e) => set("company", e.target.value)} />
      </div>

      {status === "error" && (
        <p className="gi-error" role="alert">
          Something went wrong. Please try again in a moment.
        </p>
      )}

      <div className="gi-actions">
        {step > 0 && (
          <button type="button" className="btn-secondary btn-secondary--neutral gi-back" onClick={() => goTo(step - 1)}>
            ← Back
          </button>
        )}
        <ButtonPrimary type="submit" disabled={status === "submitting"}>
          {step < LAST_STEP ? "Continue" : status === "submitting" ? "Sending…" : "Send"}
        </ButtonPrimary>
      </div>
    </form>
  );
}

function TextField({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="gi-field">
      <span>
        {label}
        {optional && <span className="gi-optional"> (optional)</span>}
      </span>
      {children}
      {error && <span className="gi-error">{error}</span>}
    </label>
  );
}

function ChoiceGroup({
  legend,
  hint,
  error,
  stacked,
  children,
}: {
  legend: string;
  hint?: string;
  error?: string;
  stacked?: boolean;
  children: ReactNode;
}) {
  return (
    <fieldset className="gi-group">
      <legend>
        {legend}
        {hint && <span className="gi-optional"> {hint}</span>}
      </legend>
      <div className={stacked ? "gi-choices gi-choices--stacked" : "gi-choices"}>{children}</div>
      {error && <p className="gi-error">{error}</p>}
    </fieldset>
  );
}

function Choice({
  type,
  name,
  checked,
  onChange,
  hint,
  children,
}: {
  type: "radio" | "checkbox";
  name: string;
  checked: boolean;
  onChange: () => void;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className={`gi-choice ${hint ? "gi-choice--card" : ""} ${checked ? "is-checked" : ""}`}>
      <input type={type} name={name} checked={checked} onChange={onChange} />
      <span className="gi-choice__text">
        <span>{children}</span>
        {hint && <span className="gi-choice__hint">{hint}</span>}
      </span>
    </label>
  );
}

function Summary({ answers }: { answers: Answers }) {
  const roles = copy.roles.filter((r) => answers.roles.includes(r.id)).map((r) => r.label);
  const rows: [string, string][] = [
    ["Name", answers.fullName],
    ["Email", answers.email],
    ["Field", answers.field],
    ["Contribute as", roles.join(", ")],
    ["Topics", answers.topics.join(", ")],
    ["Experience", answers.experience],
    ["How often", answers.availability],
  ];
  return (
    <dl className="gi-summary">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

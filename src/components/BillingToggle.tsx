export type BillingPeriod = "monthly" | "yearly";

interface BillingToggleProps {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
}

const OPTIONS: { id: BillingPeriod; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
];

// Billing_Toggle (Figma node 515:466) — segmented Monthly/Yearly control.
export function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Billing period"
      className="inline-flex items-start gap-2 self-start rounded-full border p-1"
      style={{ borderColor: "var(--color-stroke-subtle)", backgroundColor: "var(--color-warm-0)" }}
    >
      {OPTIONS.map((option) => {
        const isActive = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.id)}
            className="cursor-pointer rounded-full px-4 py-2 text-[14px] transition-colors"
            style={{
              backgroundColor: isActive ? "var(--color-warm-300)" : "transparent",
              fontWeight: isActive ? 600 : 500,
              color: "var(--color-text-primary)",
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

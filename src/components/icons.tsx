// Small inline icon set. These stand in for the icon assets referenced in
// the Figma design (arrow-icon, circle-check, sparkles, the logo dot) —
// Figma's exported asset URLs expire after ~7 days and this session's
// network policy couldn't fetch/persist the originals, so these are
// redrawn as plain inline SVG rather than left broken or faked as photos.
// Swap in the real exported assets under src/assets whenever they're handed
// over; nothing else in the code needs to change (same viewBox/size).

export function LogoDot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="var(--color-accent-coral)" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="var(--color-coral-100)" />
      <path
        d="M6.2 10.3l2.3 2.3 5.1-5.6"
        stroke="var(--color-accent-coral)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 1.5l1.2 3.3L12.5 6l-3.3 1.2L8 10.5l-1.2-3.3L3.5 6l3.3-1.2L8 1.5z"
        fill="var(--color-accent-coral)"
      />
    </svg>
  );
}

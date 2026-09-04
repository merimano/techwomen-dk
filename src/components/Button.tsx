import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

interface ButtonPrimaryProps {
  children: ReactNode;
  size?: "normal" | "small";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Button / Primary — gradient CTA. Hover/Active are real CSS pseudo-classes
// defined in index.css (.btn-primary), so they work out of the box —
// this is the fix for the bug documented in Guidelines.md where Figma
// Make's generated ButtonPrimary only ever rendered `state="Default"`.
export function ButtonPrimary({
  children,
  size = "normal",
  href,
  type = "button",
  onClick,
  disabled,
  className,
}: ButtonPrimaryProps) {
  const classes = [
    "btn-primary",
    size === "small" ? "btn-primary--small" : "btn-primary--normal",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

interface ButtonSecondaryProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  /** "coral" (default, brand action) or "neutral" (blends into a neutral card) */
  tone?: "coral" | "neutral";
  className?: string;
}

// Button / Secondary — plain coral text link with a trailing arrow, no
// background or border (the old outlined-box version is obsolete — see
// Guidelines.md "What not to do" #6).
export function ButtonSecondary({
  children,
  href,
  onClick,
  tone = "coral",
  className,
}: ButtonSecondaryProps) {
  const classes = ["btn-secondary", tone === "neutral" ? "btn-secondary--neutral" : "", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      <ArrowIcon className="size-5 shrink-0" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

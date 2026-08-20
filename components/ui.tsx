import type { CSSProperties, ReactNode } from 'react';

/**
 * Small primitives replacing the design-system bundle (_ds_bundle.js) and the
 * export's `style-hover` / `style-active` attributes, which were a design-tool
 * feature with no browser equivalent. Hover/active live in globals.css.
 */

export function CtaLink({
  href,
  children,
  variant = 'solid',
  style,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline';
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`reya-cta reya-cta--${variant}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </a>
  );
}

export function Button({
  children,
  onClick,
  variant = 'secondary',
  type = 'button',
  disabled,
  style,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`reya-btn reya-btn--${variant}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </button>
  );
}

/** The elevated Card used across the ownership row. */
export function Card({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="reya-own-card">
        <span className="reya-own-eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export function CloseIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function ChevronLeft({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRight({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function CheckCircleIcon() {
  return (
    <span className="reya-check">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="1.5">
        <path d="M4 12.5l5 5 11-12" />
      </svg>
    </span>
  );
}

export function TickIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ flex: 'none', opacity: 0.85 }}
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

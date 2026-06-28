import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  /** The text content or element of the button */
  children: React.ReactNode;
  /** Styling variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'warning';
  /** Button dimensions */
  size?: 'sm' | 'md' | 'lg';
  /** If true, the button is disabled */
  disabled?: boolean;
  /** Optional link href (renders as an anchor element if specified) */
  href?: string;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Callback on button click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** Optional custom class name */
  className?: string;
  /** Accessibility label overrides */
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
}) => {
  const combinedClass = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (onClick) {
        onClick(e as unknown as React.MouseEvent<HTMLAnchorElement>);
      }
    }
  };

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={combinedClass}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        onKeyDown={handleKeyPress}
        aria-disabled={disabled ? 'true' : undefined}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
        role="button"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled ? 'true' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

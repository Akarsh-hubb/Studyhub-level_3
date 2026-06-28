import React, { useId } from 'react';
import styles from './FormField.module.css';

export interface FormFieldProps {
  /** Label description */
  label?: string;
  /** Input type (text, password, email, number etc.) */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  /** Field name */
  name: string;
  /** Placeholder descriptor */
  placeholder?: string;
  /** Active value */
  value?: string;
  /** Validation error text */
  error?: string;
  /** Helper/information text */
  helperText?: string;
  /** Is input required */
  required?: boolean;
  /** Optional autocomplete string */
  autocomplete?: string;
  /** Value change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional custom class name */
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  name,
  placeholder = '',
  value,
  error,
  helperText,
  required = false,
  autocomplete = 'off',
  onChange,
  className = '',
}) => {
  const inputId = useId();
  const errorId = useId();
  const helperId = useId();

  const hasError = !!error;
  const hasHelper = !!helperText;

  // Compute aria-describedby links
  const descriptionIds = [
    hasError ? errorId : '',
    hasHelper ? helperId : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`${styles.fieldGroup} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.requiredAsterisk} aria-hidden="true"> *</span>}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        aria-required={required ? 'true' : undefined}
        autoComplete={autocomplete}
        onChange={onChange}
        className={`${styles.input} ${hasError ? styles.inputError : ''}`}
        aria-invalid={hasError ? 'true' : 'false'}
        aria-describedby={descriptionIds || undefined}
      />

      {hasError && (
        <span id={errorId} className={styles.errorMsg} role="alert">
          {error}
        </span>
      )}

      {!hasError && hasHelper && (
        <span id={helperId} className={styles.helperText}>
          {helperText}
        </span>
      )}
    </div>
  );
};

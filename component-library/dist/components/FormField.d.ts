import { default as React } from 'react';

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
export declare const FormField: React.FC<FormFieldProps>;

import { default as React } from 'react';

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
export declare const Button: React.FC<ButtonProps>;

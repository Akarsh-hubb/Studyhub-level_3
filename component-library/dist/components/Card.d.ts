import { default as React } from 'react';

export interface CardProps {
    /** The body content of the card */
    children: React.ReactNode;
    /** Primary title */
    title?: string;
    /** Subheading/Subtitle */
    subtitle?: string;
    /** Custom tag: article or section */
    tag?: 'article' | 'section';
    /** Renders border instead of shadow if true */
    border?: boolean;
    /** Interactive action elements (buttons, links) */
    actions?: React.ReactNode;
    /** Optional custom class name */
    className?: string;
}
export declare const Card: React.FC<CardProps>;

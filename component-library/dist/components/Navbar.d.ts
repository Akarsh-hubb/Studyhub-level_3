import { default as React } from 'react';

export interface NavbarLink {
    href: string;
    label: string;
    active?: boolean;
}
export interface NavbarProps {
    /** The brand header content */
    brand: React.ReactNode;
    /** Primary list of navigation links */
    links: NavbarLink[];
    /** Optional container elements on the right (like auth buttons) */
    rightContent?: React.ReactNode;
    /** Navigation landmark label */
    ariaLabel?: string;
}
export declare const Navbar: React.FC<NavbarProps>;

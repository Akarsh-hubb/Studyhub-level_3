import React, { useState, useId } from 'react';
import styles from './Navbar.module.css';

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

export const Navbar: React.FC<NavbarProps> = ({
  brand,
  links,
  rightContent,
  ariaLabel = 'Main Navigation',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar} aria-label={ariaLabel}>
      <div className={styles.container}>
        <div className={styles.brandContainer}>
          {brand}
        </div>

        <button
          className={styles.toggler}
          type="button"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label="Toggle navigation menu"
          onClick={handleToggle}
        >
          <span className={`${styles.togglerIcon} ${isOpen ? styles.open : ''}`}></span>
        </button>

        <div
          id={menuId}
          className={`${styles.navLinks} ${isOpen ? styles.openLinks : ''}`}
        >
          <ul className={styles.list}>
            {links.map((link, index) => (
              <li key={index} className={styles.item}>
                <a
                  href={link.href}
                  className={`${styles.link} ${link.active ? styles.activeLink : ''}`}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {rightContent && <div className={styles.rightContent}>{rightContent}</div>}
        </div>
      </div>
    </nav>
  );
};

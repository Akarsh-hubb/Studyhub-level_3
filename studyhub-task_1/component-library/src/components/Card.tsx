import React, { useId } from 'react';
import styles from './Card.module.css';

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

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  tag = 'article',
  border = false,
  actions,
  className = '',
}) => {
  const Tag = tag;
  const titleId = useId();
  
  const cardClass = [
    styles.card,
    border ? styles.border : styles.shadow,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={cardClass}
      aria-labelledby={title ? titleId : undefined}
    >
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && (
            <h3 id={titleId} className={styles.title}>
              {title}
            </h3>
          )}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      
      <div className={styles.body}>{children}</div>
      
      {actions && <div className={styles.actions}>{actions}</div>}
    </Tag>
  );
};

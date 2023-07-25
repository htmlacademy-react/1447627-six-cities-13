import React from 'react';
import styles from './rating.module.css';

type RatingProps = {
  additionalClassName?: string;
  value?: number;
  size?: 'small' | 'big';
  showLabel?: boolean;
};

const SINGLE_STAR_ICON_WIDTH = 20;

function Rating({additionalClassName, value = 0, size, showLabel}: RatingProps): React.JSX.Element {
  return(
    <div className={`
      ${styles.rating}
      ${size ? `${styles[`rating--${size}`]}` : ''}
      ${additionalClassName || ''}
    `}
    >
      <div className={styles.stars}>
        <span style={{width: `${Math.round(value) * SINGLE_STAR_ICON_WIDTH}%`}}></span>
        <span className="visually-hidden">Rating:</span>
      </div>
      <span className={showLabel ? styles.value : 'visually-hidden'}>{value}</span>
    </div>
  );
}

export default Rating;

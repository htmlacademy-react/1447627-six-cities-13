import React from 'react';
import styles from './bookmark-button.module.css';

type BookmarkButtonProps = {
  active?: boolean;
  additionalClassName?: string;
  width?: number;
  height?: number;
}

function BookmarkButton({active, additionalClassName, width = 18, height = 19}: BookmarkButtonProps): React.JSX.Element {
  return (
    <button
      className={`
        ${styles.button}
        ${active ? `${styles.activeButton}` : ''}
        ${additionalClassName || ''}
      `}
      type="button"
    >
      <svg
        className={styles.icon}
        width={width}
        height={height}
        aria-hidden="true"
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{active ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;

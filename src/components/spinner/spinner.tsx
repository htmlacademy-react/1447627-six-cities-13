import React from 'react';
import styles from './spinner.module.css';

function Spinner(): React.JSX.Element {
  return(
    <div className={styles.spinner}>
      <span className="visually-hidden">Loading</span>
      <div className={styles.gooey}>
        <span className={styles.dot}></span>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;

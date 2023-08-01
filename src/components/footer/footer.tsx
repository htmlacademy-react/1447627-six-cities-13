import React from 'react';
import Logo from '../logo';
import styles from './footer.module.css';

function Footer(): React.JSX.Element {
  return (
    <footer className={`${styles.footer} container`}>
      <Logo width={64} height={33}/>
    </footer>
  );
}

export default Footer;

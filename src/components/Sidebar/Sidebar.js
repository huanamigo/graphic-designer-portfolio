import React from 'react';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.h1}>PROJECT DESIGN</h1>
      <div>
        <a className={styles.anchor} href="##">
          a
        </a>
        <br />
        <a className={styles.anchor} href="google.com">
          ABOUT
        </a>
        <br />
        <a className={styles.anchor} href="google.com">
          CONTACT
        </a>
        <br />
      </div>
    </div>
  );
}

export default Sidebar;

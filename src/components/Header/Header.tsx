import React from 'react';
import MapleLeaf from './MapleLeaf';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.appHeader}>
    <div className={styles.logoWrapper}>
      <MapleLeaf width={32} height={32} />
    </div>
    <span>Canada Food Guide App</span>
  </header>
);

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';

function Header() {
  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/" className={styles.item}>
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/projets" className={styles.item}>
              Projets1
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/projets2" className={styles.item}>
              Projets2
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/contact" className={styles.item}>
              Contact
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/testimonial" className={styles.item}>
              Testimonial
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

import React from 'react'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <header>
        <nav>
            <div className={styles.logo}></div>
            <ul className={styles.list}>
                <li className={styles.search}><span className={styles.searchIcon}></span> Search</li>
                <li className={styles.hideinmob}>Help</li>
                <li className={styles.hideinmob}>Account</li>
                <li className={styles.cart}></li>
                <li className={styles.menu}></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
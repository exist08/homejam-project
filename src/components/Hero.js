import React from 'react'
import Navbar from './Navbar'
import styles from './hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
        <Navbar />
        <div className={styles.introContainer}>
            <h1>Cari Cari</h1>
            <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
        </div>
        <div className={styles.circles}>
            <div className={styles.circled}>
              <div className={styles.circleWrapper}>
                <span className={styles.icons,styles.heart}></span>
                <span>0</span>
                <span>Label</span>
              </div>
            </div>
            <div className={styles.circle}>
              <div className={styles.circleWrapper}>
                  <span className={styles.icons}></span>
                  <span>0</span>
                  <span>Label</span>
              </div>
            </div>
            <div className={styles.circle}>
            <div className={styles.circleWrapper}>
                  <span className={styles.icons}></span>
                  <span>0</span>
                  <span>Label</span>
              </div>
            </div>
            <div className={styles.circle}>
            <div className={styles.circleWrapper}>
                  <span className={styles.icons}></span>
                  <span>0</span>
                  <span>Label</span>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
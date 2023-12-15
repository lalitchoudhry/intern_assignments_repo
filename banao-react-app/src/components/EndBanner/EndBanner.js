import React from 'react';

// style import
import styles from './EndBanner.module.css';

// assets import
import endBannerImg from '../../assets/images/end-banner.png';

// components import
import Button from '../Button/Button';

function EndBanner() {
  return (
    <div className={styles.container}>
        <h1 className={styles.head}>Your 
            <span className={styles.purple}> Hobby </span>, Your 
            <span className={styles.blue}> Community... </span>
        </h1>
        <div className={styles.btn}><Button btnName="Get started" /></div>
        <div className={styles.img}><img src={endBannerImg} alt="img" /></div>
    </div>
  )
}

export default EndBanner;
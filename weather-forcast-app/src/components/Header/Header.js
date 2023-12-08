import React from 'react';

// import styles
import styles from './Header.module.css';
import logoImg from '../../assets/images/mdi_weather-sun-wireless-outline.png';
import refreshImg from '../../assets/images/mdi_refresh-circle.png';

function Header({resfreshClick}) {
    return (
        <header className={styles.container}>
            <div className={styles.logo_box}>
                <img src={logoImg} alt='img'/>
                <p>Weather 99</p>
            </div>
            <div className={styles.refresh_btn_box}>
                <img src={refreshImg} alt='img' onClick={resfreshClick} />
                <p>Refresh</p>
            </div>
        </header>
    )
}

export default Header;
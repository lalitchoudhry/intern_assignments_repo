import React from 'react';

// style import
import styles from "./RegisterModel.module.css";

// assets
import miniNavLogo from './../../assets/images/mini-nav-logo.png';

// components
import RegisterCard from '../RegisterCard/RegisterCard';
import Button from '../Button/Button';

function RegisterModel({toggleModel}) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <img src={miniNavLogo} alt="icon" />
            <Button btnName="X" handleClick={toggleModel} />
        </div>
        <div className={styles.model}>
        <RegisterCard />
        </div>
    </div>
  )
}

export default RegisterModel;
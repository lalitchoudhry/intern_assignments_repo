import React from 'react';

// style import
import styles from './FeatureCard.module.css';
import Button from '../Button/Button';

function FeatureCard({label, description, icon, btnName}) {
  console.log(icon)
  return (
    <div className={styles.container}>
        <div className={styles.head}>
            <img src={icon} alt="icon"/>
            <span>{label}</span>
        </div>
        <p>{description}</p>
        <Button btnName={btnName}/>
    </div>
  )
}

export default FeatureCard;
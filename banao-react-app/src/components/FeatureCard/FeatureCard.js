import React from 'react';

// style import
import styles from './FeatureCard.module.css';
import Button from '../Button/Button';

function FeatureCard({label, description, icon, btnName, user}) {
  return (
    <div className={styles.container}>
        <div className={styles.head}>
            <img src={icon} alt="icon"/>
            <span>{label}</span>
        </div>
        <p>{description}</p>
        {btnName && <Button btnName={btnName}/>}
        {user && <div className={styles.audio_user_box}>
          <div className={styles.audio_box}>
            <audio controls src="/">

            </audio>
          </div>
          <div className={styles.user_box}>
            <img src={user.img} alt="/"/>
            <div className={styles.user_detail}>
              <h4>{user.username}</h4>
              <span>{user.profession}</span>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default FeatureCard;
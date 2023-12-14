import React, { useState } from 'react';

// style import
import styles from './RegisterCard.module.css';

// all assets import
import google_icon from "./../../assets/icon/google.png";
import facebook_icon from "./../../assets/icon/facebook.png";
import lock_icon from './../../assets/icon/lock.png';

// all components import
import BroadButton from '../BroadButton/BroadButton';
import Input from '../Input/Input';

function RegisterCard() {

  // states and variable
  const [logActive, setLogActive] = useState(true)

  // functions

  return (
    <div className={styles.container}>
      <div className={styles.login_toggle_btn_box}>
        <button className={`${logActive && styles.active} ${styles.btn}`} onClick={() => setLogActive(true)}>Sign In</button>
        <button className={`${!logActive && styles.active} ${styles.btn}`} onClick={() => setLogActive(false)}>Join In</button>
      </div>
      <div className={styles.input_container}>
        <div className={styles.broad_btn_box}>
          <BroadButton btnName="Continue with Google" icon={google_icon} />
          <BroadButton btnName="Continue with Facebook" icon={facebook_icon} />
        </div>
        <div className={styles.middle_border}>
          <span className={styles.mid_line}></span>
          <span className={styles.mid_text}>Or connect with</span>
          <span className={styles.mid_line}></span>
        </div>
        <div>
        <div>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        {logActive ? <div>
          <div className={styles.checkbox_container}>
            <div >
              <input type="checkbox" id='remember-me' />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div>
              <img src={lock_icon} alt="icon" />
              <a href='/'>Forget password?</a>
            </div>
          </div>
          <BroadButton btnName="Continue" />
        </div>
        : <div className={styles.join_box}>
            <div className={styles.term_condition_text}>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy.</span></div>
            <BroadButton btnName="Agree and Continue" />
          </div>}
          </div>
      </div>
    </div>
  )
}

export default RegisterCard;
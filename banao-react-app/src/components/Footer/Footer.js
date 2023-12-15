import React, { useEffect, useState } from 'react';

// style import
import styles from './Footer.module.css';

// assets import
import facebook from '../../assets/icon/facebook+.png';
import google from '../../assets/icon/google+.png';
import email from '../../assets/icon/email.png';
import insta from '../../assets/icon/insta.png';
import pinterest from '../../assets/icon/pinterest.png';
import telegram from '../../assets/icon/telegram.png';
import twitter from '../../assets/icon/twitter.png';
import youtube from '../../assets/icon/youtube.png';

// all constants import
import { FOOTER_LINKS } from '../../data/constants';

// components import
import SearchInput from '../SearchInput/SearchInput';
import Dropdown from '../Dropdown/Dropdown';

function Footer() {

    // states and variable
    const [width, setWidth] = useState(0)

    // functions
    const updateWidth = ()=>{
        setWidth(window.innerWidth)
    }

    // useEffect
    useEffect(() => {
        updateWidth();
      window.addEventListener("resize", updateWidth);
    }, [])
    

  return (
    <div className={styles.container}>
        <div className={`${styles.footer_section} ${width > 700 && styles.active}`}>
            {FOOTER_LINKS.map((element)=><Dropdown
                {...element}
            />)}
            <div className={styles.social_section}>
                <div>
                    <h5>Social Media</h5>
                    <ul className={styles.social_links}>
                        <li><a href="/"><img src={facebook} alt="i" /></a></li>
                        <li><a href="/"><img src={twitter} alt="i" /></a></li>
                        <li><a href="/"><img src={insta} alt="i" /></a></li>
                        <li><a href="/"><img src={pinterest} alt="i" /></a></li>
                        <li><a href="/"><img src={google} alt="i" /></a></li>
                        <li><a href="/"><img src={youtube} alt="i" /></a></li>
                        <li><a href="/"><img src={telegram} alt="i" /></a></li>
                        <li><a href="/"><img src={email} alt="i" /></a></li>
                    </ul>
                </div>
                <div>
                    <h5>Invite Friends</h5>
                    <SearchInput
                        type="text"
                        placeholder="Email ID"
                        btnName="Invite"
                    />
                </div>
            </div>
        </div>
        <footer>© Purple Cues Private Limited</footer>
    </div>
  )
}

export default Footer;
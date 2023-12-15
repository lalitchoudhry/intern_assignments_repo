import React, { useEffect, useState } from 'react';

// style import
import styles from './ScrollToTop.module.css';

// assets import
import expandIcon from '../../assets/icon/expand-icon.png';

// components import
import Button from '../Button/Button';

function ScrollToTop() {

    // states and variable
    const [visible, setVisible] = useState(false)

    // functions
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // useEffect
    useEffect(() => {
        toggleVisible();
        window.addEventListener("scroll", toggleVisible);
    }, [])

    return (
        visible && <div className={styles.container}><Button
            btnName={<img src={expandIcon} alt='i' />}
            handleClick={scrollToTop}
        />
        </div>
    )
}

export default ScrollToTop;
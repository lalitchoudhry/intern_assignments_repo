import React, { useEffect, useState } from 'react';

// style import
import styles from './Header.module.css';

// all constants import
import { EXPLORE_TYPE } from '../../data/constants';

// all assets import
import navLogo from './../../assets/images/nav-logo.png';
import searchBtn from './../../assets/icon/search-btn.png';
import exploreIcon from './../../assets/icon/explore.png';
import hobbiesIcon from './../../assets/icon/hobbies.png';
import bookmarkIcon from './../../assets/icon/bookmark.png';
import notificationIcon from './../../assets/icon/notification-bell.png';
import productCartIcon from './../../assets/icon/product-cart.png';

// all components import
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import SearchInput from '../SearchInput/SearchInput';

function Header({toggleModel}) {

  // states and variable
  const [showIcon, setShowIcon] = useState('');

  // functions
  const updateDimension = ()=>{
    const width = window.innerWidth;
    setShowIcon(width > 700 ? true : false);
  }

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);
  }, [])

  return (
    <div className={styles.container}>
      <img src={navLogo} alt="logo-img" className={styles.nav_logo} />
      {showIcon ? <SearchInput
                    type="text"
                    placeholder="Search here..."
                    icon={searchBtn}
      />
      : <div className={styles.mobile_search_icon}>
        <img src={searchBtn} alt="icon" />
      </div>}
      <div className={styles.nav_option_box}>
        {showIcon && <div className={styles.item}>
          <Dropdown head="Explore" logoIcon={exploreIcon} listItem={EXPLORE_TYPE} />
          <Dropdown head="Hobbies" logoIcon={hobbiesIcon} />
        </div>}
        <div className={styles.item}>
          <img src={bookmarkIcon} alt="icon" />
        </div>
        <div className={styles.bell_icon}>
          <img src={notificationIcon} alt="icon" />
        </div>
        <div className={styles.item}>
          <img src={productCartIcon} alt="icon" />
        </div>
      </div>
      {showIcon 
        ? <Button btnName="Sign in" />
        : <Button btnName="|||" handleClick={toggleModel}/>}
    </div>
  )
}

export default Header;
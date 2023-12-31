import React, { useState } from 'react';

// style import
import styles from './Dropdown.module.css';

// all assets import
import expandIcon from './../../assets/icon/expand-icon.png';

function Dropdown({listItem, head, logoIcon}) {

    // all states and variables
    const [showDropdown, setShowDropdown] = useState(true);

    // functions

  return (
    <div className={styles.container}>
        <button className={styles.dropdown_btn} onClick={()=>setShowDropdown(!showDropdown)}>
            {logoIcon && <img src={logoIcon} alt="icon" />}
            {head}
            {expandIcon && <img src={expandIcon} alt="icon" />}
        </button>
        <ul className={`${styles.dropdown_box} ${showDropdown && styles.show_dropdown}`}>
            {listItem && listItem.map((item)=><li className={styles.dropdown_list}>{item.label}</li>)} 
        </ul>
    </div>
  )
}

export default Dropdown;
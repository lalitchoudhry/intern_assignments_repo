import React from 'react';

// style import
import styles from './SearchInput.module.css';

function SearchInput({type, placeholder, icon, btnName}) {
  return (
    <div className={styles.container}>
        <input
            type={type}
            placeholder={placeholder}
        />
        <div className={styles.search_icon_box}>
          {icon && <img src={icon} alt="search" />}
          {btnName && <button>{btnName}</button>}
        </div>
    </div>
  )
}

export default SearchInput;
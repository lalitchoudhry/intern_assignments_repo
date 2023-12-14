import React from 'react'

// style import
import styles from './Button.module.css';

function Button({btnName, handleClick}) {

  // functions

  return (
    <button className={styles.container}
      onClick={handleClick}
    >{btnName}</button>
  )
}

export default Button;
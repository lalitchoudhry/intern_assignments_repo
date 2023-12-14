import React from 'react';

// style import
import styles from './Input.module.css';

function Input({type, placeholder}) {

    // states and variable

    // functions
  return (
    <div className={styles.input_box}>
        <input 
            type={type} 
            placeholder={placeholder}
        />
    </div>
  )
}

export default Input;
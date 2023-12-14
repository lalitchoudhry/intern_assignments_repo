import React from 'react';

// style import
import styles from "./BroadButton.module.css";

function BroadButton({btnName, icon}) {
  return (
    <button className={styles.container}>
      {icon && <img src={icon} alt="icon" />}
      <span>{btnName}</span>
    </button>
  )
}

export default BroadButton;
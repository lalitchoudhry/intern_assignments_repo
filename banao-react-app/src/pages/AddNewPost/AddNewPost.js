import React from 'react';

// style import
import styles from './AddNewPost.module.css';

// all assets import
import addIcon from '../../assets/icon/add.png';

// constants import
import { POST_TYPE } from '../../data/constants';

// components import
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

function AddNewPost() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src={addIcon} alt="img" />
        <h1>Add Your Listing</h1>
      </div>
      <div className={styles.body}>
        {POST_TYPE.map((element)=><FeatureCard {...element}/>)}
      </div>
      <ScrollToTop />
    </div>
  )
}

export default AddNewPost;
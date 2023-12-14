import React, { useState } from 'react';

// style import
import styles from './Home.module.css';

// all constants data import
import { FEATURE_TYPE } from '../../data/constants';

// all components import
import Header from '../../components/Header/Header';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import RegisterModel from '../../components/RegisterModel/RegisterModel';
import FeatureCard from '../../components/FeatureCard/FeatureCard';

function Home() {

  // states and variables
  const [showRegisterModel, setShowRegisterModel] = useState(false);

  // funtions
  const toggleModel = ()=>{
    setShowRegisterModel(!showRegisterModel);
  }

  return (
    <div className={styles.container}>
        <Header toggleModel={toggleModel} />
        {showRegisterModel && <RegisterModel toggleModel={toggleModel}/>}
        <HomeBanner />
        <div className={styles.feature_container}>
          {FEATURE_TYPE.map((element)=><FeatureCard {...element}/>)}
        </div>
    </div>
  )
}

export default Home;
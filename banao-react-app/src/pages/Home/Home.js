import React, { useState } from 'react';

// style import
import styles from './Home.module.css';

// all assets import
import addIcon from '../../assets/icon/add.png';
import quoteIcon from '../../assets/icon/quote.png';
import userImg from '../../assets/images/user.jpg'

// all constants data import
import { FEATURE_TYPE } from '../../data/constants';

// all components import
import Header from '../../components/Header/Header';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import RegisterModel from '../../components/RegisterModel/RegisterModel';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import EndBanner from '../../components/EndBanner/EndBanner';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
// import AddPostBlock from '../../components/AddPostBlock/AddPostBlock';

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
        <div className={styles.addPostBlock_container}>
          <FeatureCard 
            icon={addIcon}
            label="Add your own"
            description="Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?   Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page" 
            btnName="Add new"
          />
        </div>
        <div className={styles.testimonial_container}>
          <FeatureCard
            icon={quoteIcon}
            label="Testimonials"
            description="In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it."
            user={{username:"Jeet Raut",img:userImg, audioSrc:"", profession:"Architecture"}}
          />
        </div>
        <div className={styles.end_banner_container}>
          <EndBanner />
        </div>
        <ScrollToTop />
        <Footer />
    </div>
  )
}

export default Home;
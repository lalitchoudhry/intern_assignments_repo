import React from 'react';

// style import
import styles from './HomeBanner.module.css';

// assets import
import banner_img from './../../assets/images/banner-img.png';

// all components import
import RegisterCard from '../RegisterCard/RegisterCard';

function HomeBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.banner_text}>
        <h1>Explore your <span className={styles.blue}>hobby</span> or <span className={styles.purple}>passion</span></h1>
        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
        </p>
        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
        </p>
      </div>
      <RegisterCard />
      <img src={banner_img} alt="banner" className={styles.banner_img} />
    </div>
  )
}

export default HomeBanner;
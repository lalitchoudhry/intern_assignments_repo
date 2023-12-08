import React, { useEffect, useState } from 'react';

// import styles
import styles from './WeatherCard.module.css'

function WeatherCard({main, weather, dt_txt}) {

  const [date, setDate] = useState('');

  useEffect(() => {
    let date = new Date(dt_txt.slice(0, 10))
    setDate(date.toString().slice(4, 15))
  }, [])
  
  return (
    <div className={styles.container}>
      <h3>{date}</h3>
      <div className={styles.card}>
        <div className={styles.head}>
          <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='img' />
          <p>{weather[0].main}</p>
        </div>
        <ul className={styles.body}>
          <li>{main.temp_max}</li>
          <li>{main.temp_min}</li>
          <li>{main.humidity}%</li>
          <li>d</li>
          <li>e</li>
        </ul>
      </div>
    </div>
  )
}

export default WeatherCard;
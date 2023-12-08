import React, { useEffect, useState } from 'react';

// import styles
import styles from './Home.module.css';

// import assets
import locatePointImg from '../../assets/images/material-symbols_share-location.png';
import searchImg from '../../assets/images/Search Icon.png';

// import apis
import { getWeatherReport } from '../../apis/weatherReport';

// import components
import Header from '../../components/Header/Header';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

function Home() {

    // states and variables
    const [weatherReport, setWeatherReport] = useState('');
    const [weatherCity, setWeatherCity] = useState("");
    const [inputCity, setInputCity] = useState('');

    // functions
    const resfreshClick = async()=>{
        const result = await getWeatherReport(inputCity);
        setWeatherReport(result.list.filter(report=>report.dt_txt.slice(11) === '03:00:00'));
        setWeatherCity(result.city);

        setInputCity('');
    }

    const fetchWeatherReport = async()=>{
        const result = await getWeatherReport('london');
        setWeatherReport(result.list.filter(report=>report.dt_txt.slice(11) === '03:00:00'));
        setWeatherCity(result.city);
    }

    const getNewCityWeatherData = async ()=>{
        const result = await getWeatherReport(inputCity);
        setWeatherReport(result.list.filter(report=>report.dt_txt.slice(11) === '03:00:00'));
        setWeatherCity(result.city);
    }

    // useEffects
    useEffect(()=>{
        fetchWeatherReport();
    }, [])

  return (
    <div className={styles.container}>
        <Header resfreshClick={resfreshClick} />
        <div className={styles.weather_container}>
            <div className={styles.search_area}>
                <div>
                    <div className={styles.location_name_box}>
                        <img src={locatePointImg} alt='img' />
                        <p>{weatherCity && weatherCity.name}</p>
                    </div>
                    <p className={styles.longAndLati_p}>{weatherCity && weatherCity.coord.lat} & {weatherCity && weatherCity.coord.lon}</p>
                </div>
                <div className={styles.search_box}>
                    <input
                        value={inputCity}
                        onChange={(e)=>setInputCity(e.target.value)}
                        type='text'
                        placeholder='Search your city here....'
                    />
                    <img src={searchImg} alt='img' onClick={getNewCityWeatherData} />
                </div>
            </div>
            <div className={styles.weather_report_container}>
                <ul className={styles.report_header}>
                    <li className={styles.date_box}>
                        <label htmlFor='date'>Select Date</label>
                        <input type='date' name='date' id='date' />
                    </li>
                    <li>High Temperature</li>
                    <li>Low Temperature</li>
                    <li>Humidity</li>
                    <li>Sunrise Time</li>
                    <li>Sunset Time</li>
                </ul>
                <div className={styles.weather_card_container}>
                    {weatherReport && weatherReport.map(report => <WeatherCard 
                        key={report.dt}
                        {...report}
                    />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;
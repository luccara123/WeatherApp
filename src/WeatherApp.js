import React, { useState } from 'react';
import CityWeather from './CityWeather';
import './css/utilities.css';
import './css/weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon, light } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function WeatherApp(props){
    const [city, changeCity] = useState("Toronto");
    const [ cityNameWeather, changeCityNameWeather] = useState ("Toronto")

    const searchCity = (e) =>{
        e.preventDefault();
        changeCityNameWeather(city)
    }

    const searchIcon = <FontAwesomeIcon icon={solid('magnifying-glass')} />


    return(
    <div className='wrapper flex bg-dark vh-100 p-5'>
        <div className='background-img'>
            <div className='container-1 glass-effect p-2'>
                    <form className='form-box' onSubmit={searchCity}>
                        <input type="text" value={city} onChange={(e)=>changeCity(e.target.value)} />
                        <button type="submit" className='btn'>
                            {searchIcon}
                        </button>
                    </form>

                    <CityWeather cityName={cityNameWeather} />
            </div>
        </div>
    </div>
    )
}

export default WeatherApp;
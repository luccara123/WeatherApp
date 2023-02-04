import React, { useState } from 'react';
import CityWeather from './CityWeather';

function WeatherApp(props){
    const [city, changeCity] = useState("Toronto");
    const [ cityNameWeather, changeCityNameWeather] = useState ("Toronto")

    const searchCity = (e) =>{
        e.preventDefault();
        changeCityNameWeather(city)
    }

    return(
    <div className='container'>
        <CityWeather cityName={cityNameWeather} />
        <div>
            <form onSubmit={searchCity}>
                <input type="text" value={city} onChange={(e)=>changeCity(e.target.value)} />
                 <input type="submit" value="search" />
            </form>
        </div>
    </div>)
}

export default WeatherApp;
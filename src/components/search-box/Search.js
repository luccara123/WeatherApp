import React, { useState } from 'react';
import CityWeather from '../current-weather/CityWeather';
import '../../css/utilities.css';
import '../../css/weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon, light } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import moment from 'moment'


function Search(props){
    const [city, changeCity] = useState("Toronto");
    const [ cityNameWeather, changeCityNameWeather] = useState ("Toronto")

    const searchCity = (e) =>{
        e.preventDefault();
        changeCityNameWeather(city)
    }

    const searchIcon = <FontAwesomeIcon icon={solid('magnifying-glass')} />


    return(
    <div className='wrapper flex bg-dark vh-100 p-5'>
        <div className='main-container'>
            <div className='container-1 p-2'>
                <div className='wrapper-2'>
                <form className='form-box flex' onSubmit={searchCity}>
                    <input type="text" value={city} onChange={(e)=>changeCity(e.target.value)} />
                        <button type="submit" className='btn'>
                            {searchIcon}
                        </button>
                </form>
                </div>
                <div className='weather-cards'>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Search;
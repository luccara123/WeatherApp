import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../css/utilities.css';
import '../../css/weather.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon, light } from '@fortawesome/fontawesome-svg-core/import.macro' 

function CityWeather(props){
    const cityData = props.cityData
    const locationIcon = <FontAwesomeIcon icon={solid('location-dot')} />
    const windIcon = <FontAwesomeIcon icon={solid('wind')} />


    const iconUrl = `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`

    const date = moment().format("MMM Do YY"); 
    const hour = moment().format('h:mm');

    function convertFahrenheitToCelsius(degrees) {
        return Math.floor(5 / 9 * (degrees - 32));
      }

    return(
        <div>
            {cityData &&
            <div className="box-1 center">

              <div className="city-infos">
                <div className="city-name flex">
                    <p> {locationIcon} </p>
                    <h4 className="px-3">{cityData.name}, <span>{cityData.sys.country}</span></h4>
                </div>

                <img className="weather-emoji" src={iconUrl} />
                {/* Weather description */}
                <div>
                    <h6>{cityData.weather[0].description}</h6>
                </div>

                <div className="temp flex">
                 {convertFahrenheitToCelsius(cityData.main.temp)}°C
                </div>

                <div className="fs-5">
                  feels like:  {convertFahrenheitToCelsius(cityData.main.feels_like)}°
                </div>

                {/* Max and Min temperature */}
                <div className="box-2">
                    <div>
                    Max:  {cityData.main.temp_max}
                    </div>

                    <div>
                    Min:  {cityData.main.temp_min}
                    </div>
                </div>


                {/* Wind Information */}
                <div className="wind-info">
                    <div>
                        Pressure:  {cityData.main.pressure}
                    </div>
                    <div className="flex wind-speed">
                       <h6>{windIcon}</h6> 
                       <p> Wind speed: {cityData.wind.speed} km/h</p>
                    </div>
                    <p> deg: {cityData.wind.deg} </p>
                    {
                    (cityData.wind.gust)
                    ? <div> gust: {cityData.wind.gust} </div> 
                    : <div></div> 
                    }
                </div>

              </div>
                <div className="weather-cards">
                  
                </div>
            </div>

            
                  }
        
        </div>
       
    )
}

export default CityWeather;
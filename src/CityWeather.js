import React, { useState, useEffect } from "react";
import axios from 'axios';
import './css/utilities.css';
import './css/weather.css';

function CityWeather(props){

    const [cityData, changeCityData] = useState({})

    useEffect(()=> {
        const fetchWeather = async() =>{
            var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=eb1f5528e093e46e1671d62eca019668&units=imperial`;
            const response = await axios.get(apiUrl);
            console.log(response.data);
            changeCityData(response.data)
        }
        fetchWeather()
    }, [props.cityName])

    if(!cityData.weather){
        return(<h1>Loading...</h1>)
    }

    const iconUrl = `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`



    return(
        <div>
            {cityData &&
            <div className="con">
                <div className="city-name">{cityData.name}</div>
                <div className="temp">{cityData.main.temp}</div>
                <img src={iconUrl} />

                <div>
                  feels like:  {cityData.main.feels_like}
                </div>

                {/* Max and Min temperature */}
                <div className="s-container">
                    <div>
                    Max:  {cityData.main.temp_max}
                    </div>

                    <div>
                    Min:  {cityData.main.temp_min}
                    </div>
                </div>
            </div>
                  }
        
        </div>
       
    )
}

export default CityWeather;
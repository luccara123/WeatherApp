import React from "react";
import axios from 'axios';

function CityWeather(props){
    console.log(props.cityName);
    return(
        <div>
            <h1>{props.cityName}</h1>
         
        </div>
    )
}

export default CityWeather;
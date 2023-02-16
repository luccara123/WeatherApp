import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import axios from 'axios';
import Search from './components/search-box/Search'
import CityWeather from './components/current-weather/CityWeather';
import History from './components/history/History';

function App(props) {
  
    const [cityData, changeCityData] = useState({})

    useEffect(()=> {
        const fetchWeather = async() =>{
            var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=eb1f5528e093e46e1671d62eca019668&units=imperial`;
            const response = await axios.get(apiUrl);
            console.log(response.data);
            changeCityData(response.data)
            
        }
        fetchWeather()
    }, [])

    if(!cityData.weather){
        return(<h1>Loading...</h1>)
    }
  return (
    <div className="App">
       {cityData &&
           <div>
             <Search cityData={cityData} />
             <CityWeather cityData={cityData} />
             <History />
           </div>
        }
    </div>
  );
}

export default App;

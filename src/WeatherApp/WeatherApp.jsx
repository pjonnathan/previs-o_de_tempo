import React from 'react'
import './WeatherApp.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const WeatherApp = () => {

    let api_key = "f5146e0af8087fc6b2cf78d488c99110";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value === "") return 0;

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperatura = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");


        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = data.wind.speed+"Km/h";
        temperatura[0].innerHTML = data.main.temp+"°c";
        location[0].innerHTML = data.name

    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="search_icon" onClick={() => {search()}}>
                <img src={search_icon} alt="icone de pesquisa" />
            </div>
        </div>
        <div className="weather-img">
            <img src={cloud_icon} alt="imagem cloud" />
        </div>
        <div className='weather-temp'>24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 Km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp

import React, { useState} from "react";
import axios from "axios";
import App from "./App.css";

export default function Weather() {
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState("");
  
    function displayTemperature(event) {
      event.preventDefault();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10bffd0ee69586cf4e1b1e702883c72c&units=imperial`;
      axios.get(url, { validateStatus: false }).then(handleSubmit);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    function handleSubmit(response) {
      if (response.data.cod === 200) {
        setWeather(
          <div className="text">
            <ul>
              <li>Temperature: {Math.round(response.data.main.temp)}°F</li>
              <li>Description: {response.data.weather[0].description}</li>
              <li>Wind: {response.data.wind.speed}km/hr</li>
              <li>Humidity: {response.data.main.humidity}%</li>
              <li>
                <img
                  src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                  alt={response.data.weather[0].description}
                />
              </li>
            </ul>
          </div>
        );
      } else {
        setWeather(<p>Cannot find data. Please try again.</p>);
      }
    }
  
    return (
      <form onSubmit={displayTemperature}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" placeholder="Type a city" value="Search" />
        <br />
        <h2>{weather}</h2>
      </form>
    );
  }
  
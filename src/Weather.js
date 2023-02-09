import React, { useState} from "react";
import axios from "axios";


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
                <li className="cityTitle">Weather results for {response.data.name}</li>
                <br/>
                <img className="image"
                  src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                  alt={response.data.weather[0].description}
                />
                <br />
              <li className="result">Temperature: {Math.round(response.data.main.temp)}°F</li>
              <li className="result">Description: {response.data.weather[0].description}</li>
              <li className="result">Wind: {response.data.wind.speed}km/hr</li>
              <li className="result">Humidity: {response.data.main.humidity}%</li>
              <li>

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
  
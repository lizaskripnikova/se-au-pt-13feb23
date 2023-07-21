import React, { useState } from "react";
import './index.css';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const getWeather = (city) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2d3a406fa6mshb63c64cd061837dp1e7e83jsn225934598e8d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    const w = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';

    fetch(w + city, options)
      .then(response => response.json())
      .then(response => setWeather(response))
      .catch(err => console.error(err));
  };

  const recommendActivity = (cloud_pct, temp, wind_speed) => {
    if (cloud_pct < 50 && temp > 15 && wind_speed <= 40) {
      return "Recommended outdoor activities: swimming, hiking, picnic, cycling";
    } else {
      return "Recommended indoor activities: movie, museum, bowling, cooking, reading books";
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getWeather(city);
  };

  return (
    <div className="container">
      <header className="top-head">
        <h3>Weather</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search location"
            id="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          />
          <button type="submit" id="searchCity">Search</button>
        </form>
      </header>
      <div className="row" id="weather">
        {weather ? (
          weather.error === 'An unexpected error occurred.' ? (
            <h3 style={{ color: 'red', paddingTop: '20px' }}>{city} city not found</h3>
          ) : (
            <div>
              <div>
                <span id="temp">{weather.temp}</span>
                <span>C</span>
                <span id="cityName" style={{ fontWeight: 'bold', marginLeft: '10px' }}>{city}</span>
              </div>
              <div>
                <h3 style={{ marginTop: '20px' }}>Weather Details</h3>
                <ul>
                  <li>Humidity: <span id="humidity">{weather.humidity}</span>%</li>
                  <li>Feels like: <span id="feels_like">{weather.feels_like}</span>C</li>
                  <li>Wind: <span id="wind_speed">{weather.wind_speed}</span> km/h</li>
                  <li>Cloud percentage: <span id="cloud_pct">{weather.cloud_pct}</span>%</li>
                </ul>
              </div>
              <div>
                <h3 style={{ marginTop: '20px' }}>Activity Recommendation</h3>
                <p>{recommendActivity(weather.cloud_pct, weather.temp, weather.wind_speed)}</p>
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Weather;

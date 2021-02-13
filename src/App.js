import React, { useEffect, useState } from "react";
import "./App.css";
import { getDate, getDayName } from "./utils.js";

const API = {
  // eslint-disable-next-line no-undef
  key: process.env.REACT_APP_WEATHER_WIDGET,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [searchString, setSearchString] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForecast] = useState({});

  function onSearch(e) {
    if (e.key.toLowerCase() === "enter" && searchString) {
      fetch(
        `${API.base}weather?q=${searchString}&units=metric&APPID=${API.key}`
      )
        .then((response) => response.json())
        .then((jsonResponse) => {
          setWeatherData(jsonResponse);
        });
    }
  }

  function geoLocationWeather(location) {
    let longitude = location.coords.longitude;
    let latitude = location.coords.latitude;
    fetch(
      `${API.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API.key}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setWeatherData(jsonResponse);
      });
  }

  function getForecast() {
    let longitude = weatherData.coord.lon;
    let latitude = weatherData.coord.lat;

    fetch(
      `${API.base}onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&units=metric&appid=${API.key}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setForecast(jsonResponse);
      });
  }

  useEffect(() => {
    if (!searchString) {
      navigator.geolocation.getCurrentPosition(geoLocationWeather);
    }
    console.log("searcheffect");
  }, [searchString]);

  useEffect(() => {
    if (weatherData && weatherData.coord) {
      getForecast();
    }
    console.log("weatherdataeffect");
  }, [weatherData]);

  return (
    <div className="app">
      <main>
        <div className="search">
          <input
            onChange={(e) => setSearchString(e.target.value)}
            onKeyUp={onSearch}
            type="text"
            className="search-bar"
            placeholder="Search a city..."
          />
        </div>
        {weatherData.main ? (
          <div>
            <div className="city-info">
              <div className="location">
                {weatherData.name}, {weatherData.sys.country}
              </div>
              <div className="date">{getDate(new Date())}</div>
              <div className="weather-info">
                <div className="temp">
                  {Math.round(weatherData.main.temp)}°C
                </div>
                <div className="weather">{weatherData.weather[0].main}</div>
              </div>
            </div>
            {forecast && forecast.daily && (
              <div className="forecast">
                {forecast.daily.slice(0, 5).map((day, index) => (
                  <div key={index}>
                    <div className="forecast-day">
                      <img
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                        className="forecast-image"
                      />
                    </div>

                    {index === 0 ? "Today" : getDayName(day.dt)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}

export default App;

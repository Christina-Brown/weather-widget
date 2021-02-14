import React, { useEffect, useState } from "react";

import { getApi } from "./utils.js";
import CityInfo from "./components/cityInfo/cityInfo";
import Forecast from "./components/forecast/forecast";
import Search from "./components/search/search";
import "./App.css";

function App() {
  const [searchString, setSearchString] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    if (!searchString) {
      navigator.geolocation.getCurrentPosition(
        geoLocationWeather,
        geoLocationError
      );
    }
  }, []);

  useEffect(() => {
    if (weatherData && weatherData.coord) {
      getForecast();
    }
  }, [weatherData]);

  function onSearch(e) {
    if (e.key.toLowerCase() === "enter" && searchString) {
      fetch(
        `${getApi.base}weather?q=${searchString}&units=metric&appid=${getApi.key}`
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
      `${getApi.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${getApi.key}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setWeatherData(jsonResponse);
      });
  }

  function geoLocationError() {
    let location = {
      coords: {
        longitude: "-0.13",
        latitude: "51.51",
      },
    };
    geoLocationWeather(location);
  }

  function getForecast() {
    let longitude = weatherData.coord.lon;
    let latitude = weatherData.coord.lat;

    fetch(
      `${getApi.base}onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&units=metric&appid=${getApi.key}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        setForecast(jsonResponse);
      });
  }

  return (
    <div className="app">
      <main>
        <Search
          onChange={(e) => setSearchString(e.target.value)}
          onKeyUp={onSearch}
        />
        {weatherData.main ? (
          <div>
            <CityInfo weatherData={weatherData} />
            {forecast?.daily && <Forecast dailyForecast={forecast.daily} />}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}

export default App;

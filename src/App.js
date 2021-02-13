import React from "react";
import "./App.css";

const API = {
  // eslint-disable-next-line no-undef
  key: process.env.REACT_APP_WEATHER_WIDGET,
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  const getDate = (date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dayName = days[date.getDay()];
    let dayNum = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${dayName} ${dayNum} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search a city..."
          />
        </div>
        <div className="city-info">
          <div className="location">London, GB</div>
          <div className="date">{getDate(new Date())}</div>
          <div className="weather-info">
            <div className="temp">7°C</div>
            <div className="weather">cloudy</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

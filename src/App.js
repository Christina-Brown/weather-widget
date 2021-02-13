import React from "react";
import "./App.css";

const API = {
  // eslint-disable-next-line no-undef
  key: process.env.REACT_APP_WEATHER_WIDGET,
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
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
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;

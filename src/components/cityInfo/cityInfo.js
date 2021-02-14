import React from "react";
import PropTypes from "prop-types";

import { getImage } from "./../../utils.js";
import { getDate } from "./../../utils.js";
import "./cityInfo.css";

export default function CityInfo({ weatherData }) {
  return (
    <div className="city-info">
      <div className="location">
        {weatherData.name}, {weatherData.sys.country}
      </div>
      <div className="date">{getDate(new Date())}</div>

      <div className="weather-info">
        <div className="temp">{Math.round(weatherData.main.temp)}°C</div>
        <div className="weather">
          <img
            className="weather"
            src={getImage(weatherData.weather[0].icon)}
          />
          {weatherData.weather[0].main}
        </div>
      </div>
    </div>
  );
}

CityInfo.propTypes = {
  weatherData: PropTypes.shape({
    main: PropTypes.shape({ temp: PropTypes.number }),
    name: PropTypes.string,
    sys: PropTypes.shape({ country: PropTypes.string }),
    weather: PropTypes.array,
  }),
};

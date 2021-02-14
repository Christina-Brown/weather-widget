import React from "react";
import PropTypes from "prop-types";
import "./forecast.css";

import { getImage, getDayName } from "./../utils.js";

export default function Forecast({ dailyForecast }) {
  return (
    <div className="forecast">
      {dailyForecast.slice(0, 5).map((day, index) => (
        <div key={index}>
          <div className="forecast-day">
            <img src={getImage(day.weather[0].icon)} className="weather" />
          </div>

          {index === 0 ? "Today" : getDayName(day.dt)}
        </div>
      ))}
    </div>
  );
}

Forecast.propTypes = {
  dailyForecast: PropTypes.array,
};

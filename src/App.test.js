/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { mount, shallow } from "enzyme";
import App, { geoLocationWeather } from "./App";

let wrapper;

const mockWeatherData = {
  main: {
    base: "stations",
    clouds: {
      all: 75,
    },
    cod: 200,
    coord: {
      lat: 51.4237,
      lon: -0.36,
    },
    dt: 1613327589,
    id: 2647550,
    main: {
      feels_like: -3.43,
      humidity: 75,
      pressure: 1022,
      temp: 3.01,
      temp_max: 4,
      temp_min: 2.22,
    },
    name: "Hampton",
    sys: {
      country: "GB",
      id: 1417,
      sunrise: 1613287023,
      sunset: 1613322865,
      type: 1,
    },
    timezone: 0,
    visibility: 10000,
    weather: [
      {
        description: "broken clouds",
        icon: "04n",
        id: 803,
        main: "Clouds",
      },
    ],
  },
};

beforeEach(() => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementation((mockgeoLocationWeather) =>
      Promise.resolve(
        mockgeoLocationWeather({
          coords: {
            latitude: 51.4236869,
            longitude: -0.36001089999999997,
          },
        })
      )
    ),
  };
  global.navigator.geolocation = mockGeolocation;
  wrapper = mount(<App />);
});

it("should render App component without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("should fetch correct api when geolocation available", () => {
  const mockSuccessResponse = { mockWeatherData };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = mount(<App />);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    `https://api.openweathermap.org/data/2.5/weather?lat=51.4236869&lon=-0.36001089999999997&units=metric&appid=${process.env.REACT_APP_WEATHER_WIDGET}`
  );
});

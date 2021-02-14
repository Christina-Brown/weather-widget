import React from "react";
import { shallow } from "enzyme";
import Forecast from "./forecast";

let wrapper;

beforeEach(() => {
  const mockProps = [
    {
      dt: 1613304000,
      weather: [{ description: "light rain", icon: "1d", main: "rain" }],
    },
    {
      dt: 1613390400,
      weather: [{ description: "moderate rain", icon: "2d", main: "rain" }],
    },
    {
      dt: 1613390400,
      weather: [{ description: "sunny", icon: "3d", main: "sun" }],
    },
    {
      dt: 1613390400,
      weather: [{ description: "thunder", icon: "4d", main: "thunder" }],
    },
    {
      dt: 1613390400,
      weather: [{ description: "moderate snow", icon: "5d", main: "snow" }],
    },
    {
      dt: 1613390400,
      weather: [{ description: "moderate rain", icon: "6d", main: "u" }],
    },
  ];
  wrapper = shallow(<Forecast dailyForecast={mockProps} />);
});

it("should render search without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

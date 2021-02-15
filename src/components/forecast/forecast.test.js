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

it("should only render 5 images", () => {
  const Images = wrapper.find(".weather");
  expect(Images.length).toEqual(5);
});

it("should call correct image source for first image", () => {
  const Img1 = wrapper.find(".weather").at(0);
  expect(Img1.getElement(0).props.src).toEqual(
    "http://openweathermap.org/img/wn/1d@2x.png"
  );
});

it("should call correct image source for last image", () => {
  const Img1 = wrapper.find(".weather").at(4);
  expect(Img1.getElement(0).props.src).toEqual(
    "http://openweathermap.org/img/wn/5d@2x.png"
  );
});

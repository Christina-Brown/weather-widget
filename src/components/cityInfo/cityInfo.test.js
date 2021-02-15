import React from "react";
import { shallow } from "enzyme";
import CityInfo from "./cityInfo";

let wrapper;

beforeEach(() => {
  const mockProps = {
    coord: {
      lat: 51.4237,
      lon: -0.36,
    },
    dt: 1613327589,
    id: 2647550,
    main: {
      temp: 3.01,
    },
    name: "Hampton",
    sys: {
      country: "GB",
      id: 1417,
      sunrise: 1613287023,
      sunset: 1613322865,
    },
    weather: [
      {
        description: "broken clouds",
        icon: "04n",
        id: 803,
        main: "Clouds",
      },
    ],
  };

  wrapper = shallow(<CityInfo weatherData={mockProps} />);
});

it("should render CityInfo without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("should call correct image source for icon ", () => {
  const Img = wrapper.find("img");
  expect(Img.getElement(0).props.src).toEqual(
    "http://openweathermap.org/img/wn/04n@2x.png"
  );
});

it("should show only one image ", () => {
  const Img = wrapper.find("img");
  expect(Img.length).toEqual(1);
});

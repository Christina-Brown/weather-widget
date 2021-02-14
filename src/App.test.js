import React from "react";
import { mount } from "enzyme";
import App from "./App";

let wrapper;

beforeEach(() => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        coords: {
          latitude: 51.1,
          longitude: 45.3,
        },
      })
    ),
  };
  global.navigator.geolocation = mockGeolocation;
  wrapper = mount(<App />);
});

it("should render App component without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

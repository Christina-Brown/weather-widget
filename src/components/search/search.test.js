import React from "react";
import { shallow } from "enzyme";
import Search from "./search";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Search />);
});

it("should render search without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

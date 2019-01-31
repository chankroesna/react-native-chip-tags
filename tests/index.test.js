import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import AwesomePackage from "../src/components";
import { expect } from "chai";

describe("<AwesomePackage />", () => {
  it("should render text content", () => {
    const wrapper = shallow(<AwesomePackage />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.contains(<Text>Hello There</Text>)).to.equal(true);
  });
});

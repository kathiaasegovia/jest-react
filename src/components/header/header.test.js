import React from 'react';
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Header from './header';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe("Testing header component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    
    it("Renders without crashing",() => {
      const wrapper = component.find(`[data-test='header-comp']`);
      expect(wrapper.length).toBe(1);
    });
    it("Renders logo correctly",() => {
      const logo = component.find(`[data-test='logo-img']`);
      expect(logo.length).toBe(1);
    });

});
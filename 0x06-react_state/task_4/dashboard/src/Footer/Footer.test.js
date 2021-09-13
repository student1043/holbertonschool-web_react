/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";

describe('<Footer />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });

  it('should verify that the component at the very least render the text `Copyright`', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('p').first().text()).toContain('Copyright');
  });

  it("Logged out without context", () => {
    let info = {
      user: {
              email: "test@test.com",
              password: "test",
              isLoggedIn: true,
      },
      logOut: () => {},
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  it("Logged in With context", () => {
    let info = {
      user: {
              email: "test@test.com",
              password: "test",
              isLoggedIn: true,
      },
      logOut: () => {},
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user: { ...user, isLoggedIn: true }, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(1);
    expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
  });
});

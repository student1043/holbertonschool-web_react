/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from "../App/AppContext";

describe('<Header />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Header />,
			{ context: AppContext }
    );
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists());
  });

  it('should verify that the component render `h1` tag', () => {

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should verify that the component render `img` tag', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it("logoutSection Not Created by default", () => {
    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("User Defined and logoutSection Created", () => {
    let info = {
      user: {
              email: "test@test.com",
              password: "test",
              isLoggedIn: true,
      },
      logOut: () => {},
    };
    wrapper = mount(<AppContext.Provider value={info}><Header />
                    </AppContext.Provider>);
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("Spy is Called", () => {
    const logOutSpy = jest.fn();
    let info = {
      user: {
              email: "test@test.com",
              password: "test",
              isLoggedIn: true,
      },
      logOut: () => {},
    };
    wrapper = mount(<AppContext.Provider value={info}><Header />
                    </AppContext.Provider>);
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
    wrapper.find("#logoutSection a").simulate("click");

    expect(logOutSpy.mock.calls.length).toEqual(0);

    jest.restoreAllMocks();
  });
});

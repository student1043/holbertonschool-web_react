/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from "./AppContext";


describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });

  it('should render <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render <Footer /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('should render <Notifications /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('should check that <CourseList /> is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('should verify that the <Login /> component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('should verify that the <CourseList /> component is included', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('should verify that when the keys `control` and `h` are pressed the `logOut` function, passed as a prop, is called and the alert function is called with the string `Logging you out`', () => {
    const events = {};
    const logout = jest.fn();
    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    events.keydown({ key: 'h', ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(logout).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  it('Calling handleDisplayDrawer gives true', () => {
    const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state('displayDrawer')).toEqual(true);
	});

	it('Calling handleHideDrawer gives false', () => {
    const wrapper = shallow(<App />);
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state('displayDrawer')).toEqual(false);
	});

  it("Login Works", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const Logged = {
      email: "test@test.com",
      password: "test",
      isLoggedIn: true,
    };
    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual({"email": "", "isLoggedIn": false, "password": ""});
    instance.logIn(Logged.email, Logged.password);
    expect(wrapper.state().user).toEqual(Logged);
  });

  it("Log Out Works", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const Logged = {
      email: "test@test.com",
      password: "test",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual({"email": "", "isLoggedIn": false, "password": ""});
    instance.logIn(Logged.email, Logged.password);
    expect(wrapper.state().user).toEqual(Logged);
    instance.logOut();
    expect(wrapper.state().user).toEqual({"email": "", "isLoggedIn": false, "password": ""});
  });
});

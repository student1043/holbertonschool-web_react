import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList';

configure({adapter: new Adapter()});
describe('<App />', () => {
  it('renders an <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
	});

  it("<App /> renders <Notifications />", () => {
    const wrapper = shallow(<App />);
		expect(wrapper.contains(<Notifications />)).toEqual(true);
	});

	it("<App /> renders <Header />", () => {
    const wrapper = shallow(<App />);
		expect(wrapper.contains(<Header />)).toEqual(true);
	});

	it("<App /> renders <Login />", () => {
    const wrapper = shallow(<App />);
		expect(wrapper.contains(<Login />)).toEqual(true);
	});

	it("<App /> renders <Footer />", () => {
    const wrapper = shallow(<App />);
		expect(wrapper.contains(<Footer />)).toEqual(true);
	});

	it("<App /> renders <Footer />", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<CourseList />)).toEqual(false);
	});
});

describe("If isLogginIn is true", () => {
	const wrapper = shallow(<App isLoggedIn={true} />);

	expect(wrapper.contains(<Login />)).toEqual(false);
	expect(wrapper.contains(<CourseList />)).toEqual(false);
});

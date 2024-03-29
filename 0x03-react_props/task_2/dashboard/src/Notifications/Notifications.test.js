import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'

describe('<Notifications />', () => {
  it('renders an <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
	});

  it('renders an <Notifications /> component and checks for 3 list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
	});

  it('renders an <Notifications /> component and verifies text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
	});

  it('<Notifications /> renders <NotificationItem />', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});

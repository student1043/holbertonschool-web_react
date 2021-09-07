import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem'

describe('<NotificationItem />', () => {
    it('renders an <NotificationItem /> component', () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper).toHaveLength(1);
      });

    it('renders props', () => {
      const wrapper = shallow(<NotificationItem type='def' value='testing' />);
      expect(wrapper.find('li').props()).toHaveProperty('data-priority', 'default');
      expect(wrapper.find('li').text()).toEqual('testing');
    })

    it('renders correct html', () => {
      const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
      expect(wrapper.html()).toEqual('<li><u>test</u></li>');
    })

});
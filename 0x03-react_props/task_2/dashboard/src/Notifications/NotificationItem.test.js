import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem'

describe('<NotificationItem />', () => {
    it('renders an <NotificationItem /> component', () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper).toHaveLength(1);
      });
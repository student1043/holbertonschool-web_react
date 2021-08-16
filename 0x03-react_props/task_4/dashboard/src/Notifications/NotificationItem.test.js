import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem'

describe('<NotificationItem />', () => {
    it('renders an <NotificationItem /> component', () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper).toHaveLength(1);
    });
    it('renders by passing dummy type and value', () => {
      const wrapper = shallow(<NotificationItem type="default" value="test"/>);
      expect(wrapper).toHaveLength(1);
    });
    it('redners by passing dummy html prop' , () => {
      const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
      expect(wrapper).toHaveLength(1);
    });
  });

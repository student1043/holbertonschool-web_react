import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('renders an <Login /> component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toHaveLength(1);
	});

  it('The components render input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('The components render label', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});

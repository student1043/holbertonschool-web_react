/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Login />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists());
  });

  it('should verify that the component render 2 `input` tags', () => {
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('should verify that the component render 2 `label` tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('button is disabled by default', () => {
    expect(wrapper.instance().state.enableSubmit).toEqual(false);
  });

  it('after changing the value of the two inputs, the button is enabled', () => {
    const email = wrapper.find('#email');
    const password = wrapper.find('#password');
    email.simulate('change', {
      target: { value: 'any' },
    });
    password.simulate('change', {
      target: { value: 'any' },
    });
    expect(wrapper.state('enableSubmit')).toEqual(true)
  });
});

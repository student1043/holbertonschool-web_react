import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'

describe('Checking Body Section', () => {
  it('renders a BodySection component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom>
        <p>test children node</p></BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toBe('test children node');

  });
})

import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('Testing out the BodySection', () => {
  it('Children Getting Rendered Correctly', () => {
    const wrapper = shallow(
      <BodySection title="Not a Title">
        <p>
          Not a Paragraph
        </p>
      </BodySection>
    );

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('Not a Title');
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toEqual('Not a Paragraph');
  });
})

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
    it('renders an <Footer /> component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
    });

    it('renders the text “Copyright”', () => {
        const wrapper = shallow(<Footer />);
        const textView = wrapper.find('p');
        expect(textView.text()).toContain('Copyright');
    });
});

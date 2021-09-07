import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow'

describe('renders <CourseListRow />', () => {
    it('isHeader is True, textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell={null} />);
        expect(wrapper.find('th').props()).toHaveProperty('colSpan', '2');
    })

    it('When isHeader is true, textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
        expect(wrapper.find('th')).toHaveLength(2);
    })

    it('Check for td and tr elements', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />)
        expect(wrapper.find('td')).toHaveLength(2);
        expect(wrapper.find('tr')).toHaveLength(1);
    })
  })

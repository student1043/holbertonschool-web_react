import React from 'react'
import { shallow } from 'enzyme'
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

describe('renders <CourseList />', () => {
    it('renders', () => {
        expect(shallow(<CourseList />).exists());
    })

    it('renders 5 the different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    })
})

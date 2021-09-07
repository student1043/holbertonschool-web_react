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
        expect(wrapper.find(CourseListRow)).toHaveLength(3);
    })
})

describe('when listcourses has no values in it', () => {
  let listCourses = undefined;
  beforeEach(() => {
    listCourses = [];
  });

  it('no values', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.exists());
    const CList = wrapper.find(CourseListRow);
    expect(CList).toHaveLength(3);
  });
});

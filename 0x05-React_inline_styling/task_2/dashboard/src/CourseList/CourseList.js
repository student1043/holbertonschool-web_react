import React from 'react'
import CourseListRow from './CourseListRow'
import CourseShape from './CourseShape'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

function CourseList({listCourses}) {
  return(
    <table id='CourseList' className={css(styles.ListContainer)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" ></CourseListRow>
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"></CourseListRow>
      </thead>
      <tbody>
        {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : <></>}
        {listCourses.map((input) =>
        (<CourseListRow key={input.id} textFirstCell={input.name} textSecondCell={input.credit} isHeader={false} />))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  ListContainer: {
    width: "95%",
    margin: "0 auto",
    border: '1px solid gray'
  }
});
export default CourseList;

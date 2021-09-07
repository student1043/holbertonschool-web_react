import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'

function CourseList() {
    return(
        <table id='CourseList'>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" ></CourseListRow>
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"></CourseListRow>
            </thead>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60"></CourseListRow>
                <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20"></CourseListRow>
                <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40"></CourseListRow>
            </tbody>
        </table>
    );
}

export default CourseList;

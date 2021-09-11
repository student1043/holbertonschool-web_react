import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const RowBackGroundCol = { backgroundColor: '#f5f5f5ab' };
  const HeaderRowBackGroundCol = { backgroundColor: '#deb5b545' };
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr style={HeaderRowBackGroundCol}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
        )
      } else {
          return (
            <tr style={HeaderRowBackGroundCol}>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </tr>
          )
      }
  } else {
      return (
        <tr style={RowBackGroundCol}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      )
  }
}


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    ]),
}
CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

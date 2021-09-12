import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className={css(styles.BodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  BodySectionWithMargin: {
    marginBottom: '40px',
  }
});

export default BodySectionWithMarginBottom;

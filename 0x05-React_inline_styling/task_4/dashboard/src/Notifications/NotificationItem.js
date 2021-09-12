import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    if (value)
      return <li
      data-priority={type}
      className={type === "default" ? css(styles.default) : css(styles.urgent)}
      onClick={() => markAsRead(id)}>{value}
      </li>;
    else
      return <li
      data-priority={type}
      className={type === "default" ? css(styles.default) : css(styles.urgent)}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}></li>;
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
}

NotificationItem.defaultProps = {
  type: "default"
}

const SmallScreen = {
  small: '@media screen and (max-width: 900px)',
};


const styles = StyleSheet.create({
  default: {
    color: 'blue',
    [SmallScreen.small]: {
      fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
    }
  },

  urgent: {
    color: 'red',
    [SmallScreen.small]: {
      fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
    }
  },
});

export default NotificationItem;

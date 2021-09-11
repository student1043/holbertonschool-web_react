import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
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

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },

  urgent: {
    color: 'red'
  },
});

export default NotificationItem;

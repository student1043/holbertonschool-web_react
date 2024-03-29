import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = React.memo(function NotificationItem (props) {
  const { id, type, html, value, markAsRead } = props;

  let item;
  const style = type === 'default' ? styles.default : styles.urgent;

  value
    ? item = (
      <li
        className={css(style, styles.responsive)}
        data-notification-type={ type }
        onClick={ () => markAsRead(id) }
      >
        {value}
      </li>
    ) : item = (
      <li
        className={css(style, styles.responsive)}
        data-notification-type={ type }
        dangerouslySetInnerHTML={ html }
        onClick={ () => markAsRead(id) }
      />
    );
  return item;
});

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },

  responsive: {
    '@media screen and (max-width: 900px)': {
      border: 'none',
      fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyle: 'none',
    }
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {}
};

export default NotificationItem;

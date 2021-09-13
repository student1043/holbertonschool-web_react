import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
  }
  shouldBeHidden() { return this.props.displayDrawer ? true : false; }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer,
      handleHideDrawer, markNotificationAsRead } = this.props;

    const menuStyle = css(
      styles.menuItem,
      this.shouldBeHidden() && styles.displayMenu
    );

    return (
      <>
        <div id="menuItem" className={ menuStyle }
        onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div id="notifications" className={css(styles.notifications)}>
            <button
              className={css(styles.button)}
              aria-label="Close"
              onClick={handleHideDrawer}
              id = "close"
            >
              <img
                src={closeIcon}
                alt="close button"
                style={{ width: "10px", height: "10px" }}
              />
            </button>
            {listNotifications.length ? (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.notificationsList)}>
                  {listNotifications.map(({ id, type, html, value }) => (
                    <NotificationItem key={id} id={id} type={type} html={html} value={value} markAsRead={markNotificationAsRead} />)
                  )}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "100%": {
    transform: "translateY(5px)",
  },
};

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, 500ms',
      animationIterationCount: '3',
    },
  },

  displayMenu: {
    display: 'none',
  },

  notifications: {
    border: '2px dashed #e01d3f',
    padding: '0 10px',
    width: '35%',
    position: 'absolute',
    right: '20px',
    "@media (max-width: 900px)": {
      backgroundColor: 'white',
      border: 'none',
      height: '100vh',
      width: '100vw',
      top:  0,
      right: 0,
      padding: 0,
      fontSize: '20px',
      zIndex: 1,
    },
  },

  notificationsList: {
    '@media screen and (max-width: 900px)': {
      padding: 0,
    }
  },

  button: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {}
};

export default Notifications;

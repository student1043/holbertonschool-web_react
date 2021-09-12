import React from 'react';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(styles.NotificationsBody)}>
              <div className="menuItem">
                  <p>Your notifications</p>
              </div>
        { displayDrawer && <div className='Notifications'>
          <p style={{ display: 'inline' }}>Here is the list of notifications</p>
          <button style={{ float: 'right' }} aria-label="Close" onClick={() => {
                  console.log('Close button has been clicked');
                }}>
            <img src={icon} alt="" style={{ height: '3vh'}} />
          </button>
          <ul>
            {listNotifications.length === 0 && (
              <NotificationItem value='No new notification for now' />
            )}
            {listNotifications.map((alert) => (
              <NotificationItem
              key={alert.id}
              type={alert.type}
              value={alert.value}
              html={alert.html}
              markAsRead={this.markAsRead}
              />
            ))}
          </ul>
        </div> }
      </div>
	  );
  }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

const SmallScreen = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  NotificationsBody: {
    fontSize: "20px",
    border: "2px black solid",
    padding: "1rem",
    [SmallScreen.small]: {
      width: '90%',
      border: 'none',
      backgroundColor: 'white',
    },
  }
});

export default Notifications

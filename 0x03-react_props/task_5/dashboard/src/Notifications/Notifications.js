import React from 'react'
import './Notifications.css'
import icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({displayDrawer, listNotifications}) => {
	function clickClose() {
		console.log('Close button has been clicked')
	}
	const htmlObj = {
		__html: getLatestNotification()
	}
	return (
		<div className="Main">
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
			{ displayDrawer && <div className='Notifications'>
				<p style={{ display: 'inline' }}>Here is the list of notifications</p>
				<button style={{ float: 'right' }} aria-label="Close" onClick={clickClose}>
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
            />
          ))}
				</ul>
			</div> }
		</div>
	)
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications

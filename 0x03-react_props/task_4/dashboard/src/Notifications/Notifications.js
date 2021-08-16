import React from 'react'
import './Notifications.css'
import icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem';

const Notifications = () => {
	function clickClose() {
		console.log('Close button has been clicked')
	}
	const htmlObj = {
		__html: getLatestNotification()
	}
	return (
		<div className='Notifications'>
			<p style={{ display: 'inline' }}>Here is the list of notifications</p>
			<button style={{ float: 'right' }} aria-label="Close" onClick={clickClose}>
				<img src={icon} alt="" style={{ height: '3vh'}} />
			</button>
			<ul>
                <NotificationItem type="default" value="New course available"/>
                <NotificationItem type="urgent" value="New resume available"/>
                <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
            </ul>
		</div>
	)
}

export default Notifications

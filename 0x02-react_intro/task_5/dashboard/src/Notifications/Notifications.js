import React from 'react'
import closebutton from './close-icon.png';
import './Notifications.css';
import { getLatestNotification } from './utils';


export default function Notifications() {
    return (
        <div className="Notifications">
            <button style={{ position: "relative", float: "right", }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                <img src={closebutton} alt='closebutton' style={{ height: 10}}></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}

import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value, markAsRead, id }) {
    if (value)
        return <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>;
    else
        return <li data-priority={type} dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}></li>;
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
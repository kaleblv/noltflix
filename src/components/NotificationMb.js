import React from 'react';

class NotificationMb extends React.Component {

  render () {
    return (
      <div className="notification notification-mb hide">
        <p className="notification__copy">{this.props.copy}</p>
      </div>
    )
  }
}

export default NotificationMb;

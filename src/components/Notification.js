import React from 'react';

class Notification extends React.Component {

  render () {
    return (
      <div className="notification hide">
        <p className="notification__copy">{this.props.copy}</p>
      </div>
    )
  }
}

export default Notification;

import React, { Component } from 'react';

class Message extends Component { 
  render() {
    return (
      <div className={ this.props.item.bot ? "bot" : "human" }>{ this.props.item.text }<span className="timespan">{ this.props.item.time }</span></div>
    );
  }
}

export default Message;
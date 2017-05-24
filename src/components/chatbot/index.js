import React, { Component } from 'react';
import MainWindow from "../mainWindow";
import MainInput from "../mainInput"
import data from "./data";
import "./style.css";

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.updateScroll = this.updateScroll.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.state = {
      mainWindowScroll: 0,
      messages: []
    }
  }  

  updateScroll(step) {
    this.setState({
      mainWindowScroll: this.state.mainWindowScroll + step
    });
  }
  updateMessages(messages) {
    this.setState({
      messages: this.state.messages.concat(messages),
      mainWindowScroll: 0
    });
  }
  render() {
    return (
      <div className="chatbot">
        <MainWindow 
          mainWindowScroll={this.state.mainWindowScroll}
          messages={this.state.messages}
          updateScroll={this.updateScroll}/>
        <MainInput 
          data={data}
          updateMessages={this.updateMessages}/>
      </div>
    );
  }
}

export default Chatbot;
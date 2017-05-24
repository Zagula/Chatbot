import React, { Component } from 'react';
import timestamp from "../../services/timestamp";

class MainInput extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.enterMessage = this.enterMessage.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.state = {
      message: {}
    }
  }
  inputHandler(e) {
    this.setState({
      message: {
        text: e.target.value
      }
    });
  }
  pressEnter(e) {
    if (e.keyCode === 13) this.enterMessage();
  }
  enterMessage() {
    if (!this.state.message.text) return;
    let botMessage = this.botAnswer();
    let messages = [{
      bot: false,
      text: this.state.message.text,
      time: timestamp()
    }];
    if (botMessage) messages.push({
      bot: true,
      text: botMessage,
      time: timestamp()
    })
    this.props.updateMessages(messages);
    this.setState({message: {}});
  }
  botAnswer() {
    let text = this.state.message.text || "";
    if (text.match(/^[ .]*$/)) return "Да, да, я вас слушаю"
    if (text.match(/^[A-ZА-Я!@#$%&^ ]+$/)) return "Пожалуйста, не сердитесь."
    let answers = this.props.data.botAnswers;
    if (text.match(/\?$/)) return answers[Math.floor(Math.random() * answers.length)]
  }
  render() {
    return (
      <div className="mainInput">
        <input className="inputField" onChange={ this.inputHandler } onKeyDown={ this.pressEnter } value={ this.state.message.text || "" } />
        <button className="inputButton" onClick={ this.enterMessage }>Enter</button>
      </div>
    );
  }
}

export default MainInput;
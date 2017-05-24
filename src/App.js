import React, { Component } from 'react';
import Chatbot from './components/chatbot';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Chatbot App on React</h2>
        </div>
        <br />
        <Chatbot />
      </div>
    );
  }
}

export default App;
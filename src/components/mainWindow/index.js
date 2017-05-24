import React, { Component } from 'react';
import Message from "../message";

class MainWindow extends Component {
  constructor(props) {
        super(props);
        this.wheelHandler = this.wheelHandler.bind(this);
    }
  wheelHandler(e) {
    let mainWindow = e.currentTarget;
    let maxRange = mainWindow.clientHeight - mainWindow.querySelector(".content").clientHeight;

    if (maxRange >=0) return;

    let step = e.deltaY / 4;
    let scroll = this.props.mainWindowScroll;
    
    if (scroll + step < maxRange) step = maxRange - scroll;
    if (scroll + step > 0) step = -scroll;

    this.props.updateScroll(step);
  }
  render() {
    return (
        <div className="mainWindow" onWheel={ this.wheelHandler }>
            <div className="content" style={ {bottom: this.props.mainWindowScroll + "px"} }>
            {
                this.props.messages.map( (item, index) => {
                    return (
                        <Message item={ item } key={ index }/>
                    );
                })
            }
            </div>
        </div>
    );
  }
}

export default MainWindow;
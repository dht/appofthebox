import React, { Component } from "react";
import "./Editor.css";
import Draggable from "react-draggable";
import Panel from "../Panel/Panel";
import Element from "../Element/ElementContainer";
import Around from "../Around/AroundContainer";

export class Editor extends Component {
  state = {
    phone: {
      viewport: {
        x: 320,
        y: 568
      }
    }
  };

  componentWillReceiveProps(props) {
    const { phone } = props;

    if (phone && phone !== this.state.phone) {
      this.setState({ phone });
    }
  }

  render() {
    const { phone } = this.state;
    const { viewport } = phone || {},
      { x, y } = viewport || {};

    return (
      <div className="Editor-container">
        <div className="canvas" style={{ width: x, height: y }}>
          <div className="phone-name">{phone.name}</div>
          <div className="phone-viewport">{x}x{y}</div>
          <Element id={1} />
          <Around mode="HOVER" />
          <Around mode="SELECTED" />
        </div>

        <Draggable
          defaultPosition={{ x: 50, y: -50 }}
        >
        <div>
          <Panel />
          </div>
        </Draggable>
      </div>
    );
  }
}

export default Editor;

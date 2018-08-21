import React, { Component } from "react";
import "./Properties.css";

export class Property extends Component {
  state = {};

  focus = () => {
    this.refs.input1.focus();
    this.refs.input1.select();
  };

  render() {
    const { item } = this.props;

    return (
      <div className="Property-container">
        <div className="key" onClick={this.focus}>
          {item}
        </div>
        <input ref="input1" value={10} className="value" />
      </div>
    );
  }
}

export default Property;

import React, { Component } from "react";
import "./Properties.css";
import { PropertiesArray } from "./allProperties";
import { Property } from "./Property";

export class Properties extends Component {
  state = {};

  focus = () => {
    this.refs.input1.focus();
    this.refs.input1.select();
  };

  render() {
    return (
      <div className="Properties-container">
        {PropertiesArray.map(item => (
          <Property key={item} item={item} />
        ))}
      </div>
    );
  }
}

export default Properties;

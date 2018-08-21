import React, { Component } from "react";
import "./PhoneList.css";
import { PhonesArrUnique } from "./phones";

export class PhoneList extends Component {
  state = {};

  render() {
    return (
      <div className="PhoneList-container">
      <div className="inner">
        {PhonesArrUnique.map(phone => (
          <div className="phone" key={phone.id} onClick={() => this.props.onClick(phone)}>
          <div className="image" style={{backgroundImage:`url(/images/${phone.imageName})`}}></div>
            <div className="name">{phone.name}</div>
            <div className="viewport">
              {phone.viewport.x}x{phone.viewport.y}
            </div>
            <div className="pixels">
              {phone.pixels.x}x{phone.pixels.y}
            </div>
            {phone.popularity ? <div className="popularity">
              {phone.popularity}
            </div> : null}
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default PhoneList;

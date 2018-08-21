import React, { Component } from "react";
import "./UI.css";
import classnames from "classnames";

export class Checkbox extends Component {
  state = {};

  render() {
      const {label, checked} = this.props;

      const backgroundColor = checked ? "dodgerblue" : "#444";
      const color = checked ? "#fff" : "#999";

    return <div className="Checkbox-container">
        <Icon icon="done" backgroundColor={backgroundColor} color={color} onClick={this.props.onClick} />
        <div className="label">
            {label}
        </div>
    </div>;
  }
}

export class Button extends Component {
  state = {};

  render() {
    return <div className="Button-container" />;
  }
}

export class IconButton extends Component {
  state = {};

  render() {
    const { icon, label } = this.props;
    return (
      <div className="IconButton-container">
        <i class="icon material-icons">{icon}</i>
        <div className="label">{label}</div>
      </div>
    );
  }
}

export class Icon extends Component {
  state = {};

  render() {
    const { icon, color, backgroundColor } = this.props;

    let className = classnames("Icon-container", {clickable: this.props.onClick});

    return (
      <div className={className} style={{ color, backgroundColor }}>
        <i class="icon material-icons">{icon}</i>
        <div className="overlay"></div>
      </div>
    );
  }
}

export default {
  Button,
  Checkbox,
  Icon,
  IconButton
};

import React, { Component } from "react";
import "./IconButton.css";
import classnames from "classnames";

export class IconButton extends Component {
    state = {};

    render() {
        const { icon, label } = this.props;
        return (
            <div className="IconButton-container" onClick={this.props.onClick}>
                <i className="icon material-icons">{icon}</i>
                <div className="label">{label}</div>
            </div>
        );
    }
}

export default IconButton;

// @flow
import React, { Component } from "react";
import "./Button.css";
import PropTypes from "prop-types";

type props = {};

export class Button<props> extends Component {
    static defaultProps: props = {};

    render() {
        return (
            <button onClick={this.props.onClick} className="Button-container">
                <i className="material-icons">{this.props.icon}</i>
            </button>
        );
    }
}

Button.contextTypes = {
    i18n: PropTypes.object
};

export default Button;

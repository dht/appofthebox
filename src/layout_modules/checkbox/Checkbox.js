import React, { Component } from "react";
import "./Checkbox.css";
import classnames from "classnames";
import Icon from "../icon/Icon";

export class Checkbox extends Component {
    state = {};

    render() {
        const { label, checked } = this.props;

        const backgroundColor = checked ? "dodgerblue" : "#444";
        const color = checked ? "#fff" : "#999";

        return (
            <div className="Checkbox-container">
                <Icon
                    icon="done"
                    backgroundColor={backgroundColor}
                    color={color}
                    onClick={this.props.onClick}
                />
                <div className="label">{label}</div>
            </div>
        );
    }
}

export default Checkbox;

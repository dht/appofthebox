import React, { Component } from "react";
import "./Icon.css";
import classnames from "classnames";

export class Icon extends Component {
    state = {};

    render() {
        const { icon, color, backgroundColor } = this.props;

        let className = classnames("Icon-container", {
            clickable: this.props.onClick
        });

        return (
            <div className={className} style={{ color, backgroundColor }}>
                <i className="icon material-icons">{icon}</i>
                <div className="overlay" />
            </div>
        );
    }
}

export default Icon;

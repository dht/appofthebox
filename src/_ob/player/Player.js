// @flow
import React, { Component } from "react";
import "./Player.css";
import PropTypes from "prop-types";
import MousePointer from "../mouse-pointer/MousePointerContainer";

type props = {};

export class Player<props> extends Component {
    static defaultProps: props = {};

    state = {};

    render() {
        return (
            <div className="Player-container">
                <MousePointer />
            </div>
        );
    }
}

Player.contextTypes = {
    i18n: PropTypes.object
};

export default Player;

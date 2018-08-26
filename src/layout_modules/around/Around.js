import React, { Component } from "react";
import "./Around.css";
import classnames from "classnames";

export class Around extends Component {
    state = {};

    componentWillReceiveProps(props) {
    }
    
    style = () => {
        const { box = {} } = this.props;

        return {
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height
        };
    };

    render() {
        const { mode, box = {} } = this.props;

        const exists = box.top;

        const className = classnames("Around-container", {
            hover: mode === "HOVER",
            selected: mode === "SELECTED",
            exists: exists
        });
        return <div className={className} style={this.style()} />;
    }
}

export default Around;

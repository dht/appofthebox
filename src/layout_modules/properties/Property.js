import React, { Component } from "react";
import "./Properties.css";
import Input from "../input/Input";

const colorsProps = ["color", "backgroundColor"];

export class Property extends Component {
    state = {
        isFocused: false
    };

    render() {
        const { property } = this.props;
        const { isFocused } = this.state;

        return (
            <div className="Property-container">
                <div
                    className="key"
                    onClick={() => this.setState({ isFocused: true })}
                >
                    {property.key.replace("background", "bk")}
                </div>
                <Input
                    value={property.value || ""}
                    kind={property.key}
                    isFocused={isFocused}
                    onValue={this.props.onValue}
                    placeholder={property.placeholder}
                />
            </div>
        );
    }
}

export default Property;

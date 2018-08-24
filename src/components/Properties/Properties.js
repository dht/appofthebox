import React, { Component } from "react";
import "./Properties.css";
import { Property } from "./Property";
import { PropertiesArray } from "../../constants/allProperties";

export class Properties extends Component {
    state = {};

    focus = () => {
        this.refs.input1.focus();
        this.refs.input1.select();
    };

    render() {
        const { properties } = this.props;

        return (
            <div className="Properties-container">
                {properties.map(property => (
                    <Property
                        key={property.key}
                        property={property}
                        onValue={this.props.onValue}
                    />
                ))}
            </div>
        );
    }
}

export default Properties;

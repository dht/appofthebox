import React, { Component } from "react";
import "./Element.css";
import ElementTypes from "./ElementTypes";
import _Element from "./ElementContainer";
import { parseStyle } from "../../utils/style";

export class Element extends Component {
    state = {};

    componentDidMount() {}

    componentWillUnmount() {}

    style = () => {
        const { element } = this.props,
            { type, properties } = element;

        console.log("element ->", element);

        return parseStyle(properties, type);
    };

    renderInner = () => {
        const { element } = this.props,
            { type, data } = element;

        if (type === ElementTypes.TEXT) {
            const { _value } = data;
            return <span className="innerText">{_value}</span>;
        }
    };

    renderChildren = () => {
        const { id, elements } = this.props;

        return elements
            .filter(element => element && element.parentId === id)
            .map(element => <_Element id={element.id} key={element.id} />);
    };

    render() {
        const { element } = this.props;

        console.log('this.props.id ->', this.props.id);

        if (!element) return null;

        return (
            <div
                className="Element-container"
                style={this.style()}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                onClick={this.props.onClick}
            >
                {this.renderInner()}
                {this.renderChildren()}
            </div>
        );
    }
}

export default Element;

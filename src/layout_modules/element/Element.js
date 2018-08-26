import React, { Component } from "react";
import "./Element.css";
import ElementTypes from "./ElementTypes";
import { parseStyle } from "../../utils/style";

export class Element extends Component {
    state = {};

    componentDidMount() {}

    componentWillUnmount() {}

    style = () => {
        const { element } = this.props,
            { type, properties } = element;

        console.log("properties ->", properties);

        return parseStyle(properties, type);
    };

    renderInner = () => {
        const { element } = this.props,
            { type, data, properties } = element;

        if (type === ElementTypes.TEXT) {
            const { _value } = data;
            return (
                <span className="innerText">
                    {_value}
                    {properties.fontSize}
                </span>
            );
        }
    };

    renderChildren = () => {
        const { id, elements } = this.props;

        return elements
            .filter(element => element && element.parentId === id)
            .map(element => <Element {...this.props} id={element.id} key={element.id} />);
    };

    onDoubleClick = () => {
        const { element } = this.props;
        const { type } = element;

        switch (type) {
            case ElementTypes.TEXT:
                this.props.onTextChange(element);
                break;
        }
    };

    render() {
        const { element } = this.props;

        if (!element) return null;

        return (
            <div
                className="Element-container"
                style={this.style()}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                onClick={this.props.onClick}
                onDoubleClick={this.onDoubleClick}
            >
                {this.renderInner()}
                {this.renderChildren()}
            </div>
        );
    }
}

export default Element;

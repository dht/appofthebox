import React, { Component } from "react";
import "./Element.css";
import ElementTypes from "./ElementTypes";
import { parseStyle } from "../../utils/style";

export class Element extends Component {
    state = {};

    componentDidMount() {}

    componentWillUnmount() {}

    getElement = () => {
        const { elements, id } = this.props;
        return elements[id - 1];
    };
    style = () => {
        const element = this.getElement(),
            { type, properties } = element;

        return parseStyle(properties, type);
    };

    renderInner = () => {
        const element = this.getElement(),
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
            .map(element => (
                <Element {...this.props} id={element.id} key={element.id} />
            ));
    };

    onDoubleClick = ev => {
        const { id, element } = this.props;
        const { type } = element;

        switch (type) {
            case ElementTypes.TEXT:
                this.props.onTextChange(ev, id, element);
                break;
        }
    };

    onClick = ev => {
        const { id } = this.props;
        this.props.onClick(ev, id);
    };

    render() {
        const { id } = this.props;
        const element = this.getElement();

        if (!element) return null;

        return (
            <div
                data-ob="element"
                data-hover={true}
                className="Element-container"
                style={this.style()}
                onClick={this.onClick}
                onDoubleClick={this.onDoubleClick}
            >
                {this.renderInner()}
                {this.renderChildren()}
            </div>
        );
    }
}

export default Element;

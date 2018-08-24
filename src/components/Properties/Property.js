import React, { Component } from "react";
import "./Properties.css";
import { dataLists } from "./allProperties";

const colorsProps = ["color", "backgroundColor"];

export class Property extends Component {
    state = {
        value: "",
        type: "text"
    };

    refreshType(key) {
        if (colorsProps.indexOf(key) >= 0) {
            this.setState({ type: "color" });
        }
    }

    componentDidMount() {
        const { property } = this.props;
        const { key, value } = property;
        this.setState({ value });
        this.refreshType(key);
    }

    componentWillReceiveProps(props) {
        const { property } = props;
        const { key, value } = property;

        if (value !== this.state.value) {
            this.setState({ value });
        }

        this.refreshType(key);
    }

    focus = () => {
        this.refs.input1.focus();
        this.refs.input1.select();
    };

    onChange = ev => {
        this.setState({ value: ev.target.value });
    };

    onKeyDown = ev => {
        const { property } = this.props;
        const { value } = this.state;

        if (ev.which === 13) {
            this.props.onValue({ [property.key]: value });
            this.refs.input1.blur();
        }
    };

    renderDataList() {
        const { property } = this.props;
        const datalist = dataLists[property.key] || [];

        return (
            <datalist id={property.key}>
                {datalist.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </datalist>
        );
    }

    render() {
        const { property } = this.props;
        const { value, type } = this.state;
        const datalistExists = dataLists[property.key];

        let props = {};

        if (datalistExists) {
            props.list = property.key;
        }

        return (
            <div className="Property-container">
                <div className="key" onClick={this.focus}>
                    {property.key}
                </div>
                <input
                    ref="input1"
                    {...props}
                    value={value || ""}
                    type={type}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    placeholder={property.placeholder}
                    className="value"
                />
                {this.renderDataList()}
            </div>
        );
    }
}

export default Property;

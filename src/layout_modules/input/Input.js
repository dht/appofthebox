import React, { Component } from "react";
import "./Input.css";
import { dataLists } from "./dataLists";

const colorsProps = ["color", "backgroundColor"];

export class Input extends Component {
    state = {
        kind: "",
        value: "",
        type: "text"
    };

    refreshType(kind) {
        if (colorsProps.indexOf(kind) >= 0) {
            this.setState({ type: "color" });
        }
    }

    componentDidMount() {
        const { kind, value } = this.props;
        this.setState({ kind, value });
        this.refreshType(kind);
    }

    componentWillReceiveProps(props) {
        const { kind, value, isFocused } = props;

        if (value !== this.state.value) {
            this.setState({ value });
        }

        if (kind !== this.state.kind) {
            this.setState({ kind });
        }

        if (isFocused !== this.state.isFocused && isFocused) {
            this.focus();
        }

        this.refreshType(kind);
    }

    onKeyDown = ev => {
        const { kind, value } = this.state;

        if (ev.which === 13) {
            this.props.onValue({ [kind]: value });
            this.refs.input.blur();
        }

        if (ev.which === 27) {
            this.refs.input.blur();
        }
    };

    onChange = ev => {
        const { kind, type } = this.state;

        const immediate = type === "color";

        this.setState({ value: ev.target.value });

        if (immediate) {
            this.props.onValue({ [kind]: ev.target.value });
        }
    };

    focus = () => {
        this.refs.input.focus();
        this.refs.input.select();
        this.setState({ isFocused: true });
    };

    onBlur = () => {
        this.setState({ isFocused: false });
    };

    renderDataList() {
        const { kind } = this.state;
        const datalist = dataLists[kind] || [];

        return (
            <datalist id={kind}>
                {datalist.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </datalist>
        );
    }

    list = () => {
        const { kind } = this.state;

        const datalistExists = dataLists[kind];

        let props = {};

        if (datalistExists) {
            props.list = kind;
        }

        return props;
    };

    render() {
        const { kind, value, type } = this.state;

        return (
            <div className="Input-container">
                <input
                    ref="input"
                    {...this.list()} // must not have property list if empty for autocomplete
                    value={value || ""}
                    type={type}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    placeholder={this.props.placeholder}
                    className="value"
                />
                {this.renderDataList()}
            </div>
        );
    }
}

export default Input;

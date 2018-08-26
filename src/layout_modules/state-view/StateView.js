import React, { Component } from "react";
import "./StateView.css";
import ReactJson from "react-json-view";

export class StateView extends Component {
    state = {
        show: false
    };

    toggle = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    };

    render() {
        const { json } = this.props;
        const { show } = this.state;

        return (
            <div className="StateView-container">
                <button onClick={this.toggle}>toggle state</button>
                {show ? <ReactJson src={json} /> : null}
            </div>
        );
    }
}

// theme="monokai"

export default StateView;

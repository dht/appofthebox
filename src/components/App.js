import React, { Component } from "react";
import PhoneList from "./PhoneList/PhoneList";
import Editor from "./Editor/Editor";
import Clock from "./Clock/Clock";
import "./App.css";

class App extends Component {
    state = {
        phone: {}
    };

    setPhone = phone => this.setState({ phone });

    render() {
        const { isRunning } = this.props;
        const { phone } = this.state;

        return (
            <div className="App">
                <div className="clock">
                    <Clock isRunning={isRunning} />
                </div>
                <PhoneList onClick={this.setPhone} />
                <Editor phone={phone} />
            </div>
        );
    }
}

export default App;

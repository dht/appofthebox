import React, { Component } from "react";
import PhoneList from "./connected/PhoneList";
import Editor from "./Editor/EditorContainer";
import Clock from "../layout_modules/clock/Clock";
import "./App.css";
import Root from "./connected/RootModal";

class App extends Component {
    state = {
        phone: {}
    };

    _getParam = (props, which) => {
        const { match } = props,
            { params } = match || {};
        return params[which];
    };

    loadBucketData(props) {
        const bucketId = this._getParam(props, "bucketId");
        const componentId = this._getParam(props, "componentId");
        const resolutionId = 1;

        if (bucketId !== this.state.id) {
            this.setState({ id: bucketId });
            this.props.loadBucketData(bucketId, componentId, resolutionId);
        }
    }

    componentWillReceiveProps(props) {
        this.loadBucketData(props);
    }

    componentDidMount() {
        // console.log('componentDidMount', true);
        this.loadBucketData(this.props);
        // this.saveInterval = setInterval(this.props.autosave, 5000);
    }

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
                <Root />
            </div>
        );
    }
}

export default App;

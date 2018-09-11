// @flow
import React, { Component } from "react";
import "./Recorder.css";
import PropTypes from "prop-types";
import { ReactMic } from "react-mic";
import { modes } from "../recordState";
import * as storage from "../storage";

type props = {};

export class Recorder<props> extends Component {
    static defaultProps: props = {};

    state = {
        isRecording: false
    };

    componentDidMount() {}

    componentWillReceiveProps(props) {
        const { mode } = props;
        console.log("props ->", props);

        if (mode !== this.state.mode) {
            const isRecording = mode === modes.RECORDING;
            this.setState({ mode, isRecording });
            this.record(isRecording);
        }
    }

    record = isRecording => {
        if (!isRecording) return;
        this.recordedChunks = [];
    };

    play = async () => {
        const audioElement = document.getElementById("audio");
        const blob = await storage.getBlob("record");

        audioElement.src = window.URL.createObjectURL(blob);
    };

    download = () => {
        var blob = new Blob(this.recordedChunks, {
            type: "audio/webm"
        });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "test.webm";
        a.click();
        window.URL.revokeObjectURL(url);
    };

    onData = recordedBlob => {
        this.recordedChunks.push(recordedBlob);
    };

    onStop(recordedBlob) {
        console.log("recordedBlob is: ", recordedBlob);
        storage.saveBlob("record", recordedBlob.blob);
    }

    renderRecord() {
        return (
            <ReactMic
                record={this.state.isRecording}
                className="sound-wave"
                onStop={this.onStop}
                onData={this.onData}
                strokeColor="#fff"
                backgroundColor="#333"

            />
        );
    }

    render() {
        return (
            <div className="Recorder-container">
                {this.renderRecord()}
                <audio id="audio" playsInline autoPlay />
            </div>
        );
    }
}

Recorder.contextTypes = {
    i18n: PropTypes.object
};

export default Recorder;

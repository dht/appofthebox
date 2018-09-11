// @flow
import React, { Component } from "react";
import "./MissionControl.css";
import PropTypes from "prop-types";
import { eventTypes, modes } from "../recordState";
import * as dom from "../dom";
import * as pointer from "../pointer";
import Recorder from "../recorder/RecorderContainer";
import EventList from "../event-list/EventListContainer";
import { Button } from "../button/Button";

type props = {
    cursor: object
};

export class MissionControl<props> extends Component {
    static defaultProps: props = {};

    constructor(props) {
        super(props);
        this.state = {};

        this.child = React.createRef();
    }

    click = ev => {
        const { cursor } = this.props;

        const obId = dom.findObElement(ev.target);

        if (obId === "mission-control") return;

        this.props.addEvent({
            obId,
            type: eventTypes.CLICK,
            cursor: { left: ev.clientX, top: ev.clientY }
        });

        const duration = pointer.duration(cursor, {
            top: ev.clientY,
            left: ev.clientX
        });

        this.props.setCursor({ left: ev.clientX, top: ev.clientY, duration });
    };

    componentDidMount() {
        window.addEventListener("click", this.click);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.click);
    }

    toggleRecording = () => {
        let { record } = this.state;

        record = !record;

        if (record) {
            this.addEvent(this.addEvent, { type: eventTypes.START });
        }

        this.ts = timestamp();

        if (!record)
            this.setState({
                record: !record
            });
    };

    download = () => {
        this.recorder.getWrappedInstance().download();
    };

    play = () => {
        this.recorder.getWrappedInstance().play();
        this.props.play();
    };

    renderStats() {
        const { currentDuration } = this.props,
            { rest = 0, cursor = 0, total = 0 } = currentDuration;

        return (
            <div className="stats">
                {Math.floor(rest)} | {Math.floor(cursor)} | {Math.floor(total)}
            </div>
        );
    }

    renderRecordButton() {
        const { mode } = this.props;

        const isRecording = mode === modes.RECORDING;

        if (isRecording) {
            return <Button onClick={this.props.stop} icon="stop" />;
        } else {
            return <Button onClick={this.props.record} icon="keyboard_voice" />;
        }
    }

    render() {
        const { mode } = this.props;

        return (
            <div className="MissionControl-container" data-ob="mission-control">
                <Recorder
                    ref={instance => {
                        this.recorder = instance;
                    }}
                />

                <div className="text">{mode}</div>
                {this.renderStats()}
                <div className="buttons">
                    {this.renderRecordButton()}
                    <Button onClick={this.play} icon="play_arrow" />
                    <Button onClick={this.download} icon="cloud_download" />
                </div>
                <EventList />
            </div>
        );
    }
}

MissionControl.contextTypes = {
    i18n: PropTypes.object
};

export default MissionControl;

const timestamp = () => new Date().getTime();

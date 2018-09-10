// @flow
import React, { Component } from "react";
import "./MissionControl.css";
import PropTypes from "prop-types";
import { eventTypes } from "../recordState";
import * as dom from "../dom";
import Recorder from "../recorder/RecorderContainer";
import EventList from "../event-list/EventListContainer";

type props = {};

export class MissionControl<props> extends Component {
    static defaultProps: props = {};

    constructor(props) {
        super(props);
        this.state = {};

        this.child = React.createRef();
    }

    click = ev => {
        const obId = dom.findObElement(ev.target);

        if (obId === "mission-control") return;

        this.props.addEvent({
            obId,
            type: eventTypes.CLICK,
            cursor: { left: ev.clientX, top: ev.clientY }
        });

        this.props.setCursor({ left: ev.clientX, top: ev.clientY, duration: 2000 });
    };

    mouseEnter = ev => {

        console.log('1 ->', 1);
        
        const obId = dom.findObElement(ev.target);
        const middle = dom.middle(ev.target.getBoundingClientRect());
        
        console.log('mouseEnter ->', obId);

        if (obId === "mission-control") return;
        
        this.props.addEvent({
            obId,
            type: eventTypes.HOVER,
            cursor: middle
        });

        this.props.setCursor(middle);
    }

    componentDidMount() {
        window.addEventListener("click", this.click);
        dom.addEventListener("[data-hover='dynamic']", "mouseenter", this.mouseEnter);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.click);
        dom.removeEventListener("[data-hover='dynamic']", "mouseenter", this.mouseEnter);
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
                <div>
                    <button onClick={this.props.record}>Record</button>
                    <button onClick={this.props.stop}>Stop</button>
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.download}>Download</button>
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


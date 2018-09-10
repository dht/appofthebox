import React from "react";
import { connect } from "react-redux";
import MissionControl from "./MissionControl";
import * as actions from "../recordState";
import * as selectors from "../selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        mode: selectors.modeSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addEvent: (value) => {
            dispatch(actions.newEvent(value));
        },
        play: () => {
            dispatch(actions.play());
        },
        record: () => {
            dispatch(actions.record());
        },
        stop: () => {
            dispatch(actions.stop());
        },
        setCursor: (cursor) => {
            dispatch(actions.setCursor(cursor));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MissionControl);

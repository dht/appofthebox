import React from "react";
import { connect } from "react-redux";
import EventList from "./EventList";
import * as actions from "../recordState";
import * as selectors from "../selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        timeline: selectors.eventSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);

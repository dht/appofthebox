import React from "react";
import { connect } from "react-redux";
import Recorder from "./Recorder";
import * as actions from "../recordState";
import * as selectors from "../selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        mode: selectors.modeSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
)(Recorder);

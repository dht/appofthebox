import React from "react";
import { connect } from "react-redux";
import MousePointer from "./MousePointer";
import * as actions from "../recordState";
import * as selectors from "../selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        cursor: selectors.cursorSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MousePointer);

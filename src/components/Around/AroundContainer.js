import React from "react";
import { connect } from "react-redux";
import Around from "./Around";
import {
    hoverBoxSelector,
    selectedBoxSelector
} from "../../selectors/selectors";

const mapStateToProps = (state, ownProps) => {
    const mode = ownProps.mode;

    const data =
        mode === "HOVER" ? hoverBoxSelector(state) : selectedBoxSelector(state);

    return {
        elementId: data.elementId,
        box: data.box,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        method: () => {}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Around);

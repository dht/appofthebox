import React from "react";
import { connect } from "react-redux";
import Panel from "./Panel";
import * as selectors from "../../selectors/selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        element: selectors.elementSelector(state)
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
)(Panel);

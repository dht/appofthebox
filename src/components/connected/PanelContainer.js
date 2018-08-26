import React from "react";
import { connect } from "react-redux";
import Panel from "../../layout_modules/panel/Panel";
import * as selectors from "../../selectors/selectors";
import * as thunks from "../../reducers/app_thunks";

const mapStateToProps = (state, ownProps) => {
    return {
        element: selectors.elementSelector(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addElement: () => {
            dispatch(thunks.addElement("TEXT"));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);

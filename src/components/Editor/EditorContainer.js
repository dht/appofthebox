import React from "react";
import {connect} from "react-redux";
import Editor from './Editor';
import {currentResolutionSelector} from "../../selectors/selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        resolution: currentResolutionSelector(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        method: () => {
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
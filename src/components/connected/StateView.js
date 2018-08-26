import React from "react";
import {connect} from "react-redux";
import StateView from '../../layout_modules/state-view/StateView';

const mapStateToProps = (state, ownProps) => {
    return {
        json: state,
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
)(StateView);
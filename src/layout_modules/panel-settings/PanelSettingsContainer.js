import React from "react";
import {connect} from "react-redux";
import PanelSettings from './PanelSettings';

const mapStateToProps = (state, ownProps) => {
    return {
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
)(PanelSettings);
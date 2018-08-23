import React from "react";
import {connect} from "react-redux";
import PhoneList from './PhoneList';
import {resolutionsSelector} from "../../selectors/selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        resolutions: resolutionsSelector(state)
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
)(PhoneList);
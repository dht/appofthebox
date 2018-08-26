import React from "react";
import {connect} from "react-redux";
import ModalData from '../../layout_modules/modal-data/Data';

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
)(ModalData);
import React from "react";
import {connect} from "react-redux";
import ModalIconLibrary from '../../layout_modules/modal-icon-library/IconLibrary';

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
)(ModalIconLibrary);
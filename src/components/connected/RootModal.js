import { connect } from "react-redux";
import React, { Component } from "react";
import { types } from "../../reducers/modal/modal";
import * as actions from "../../reducers/modal/modal";
import ModalIconLibrary from "./ModalIconLibrary";
import ModalData from "./ModalData";

const MODAL_COMPONENTS = {
    [types.ICON_GALLERY]: ModalIconLibrary,
    [types.DATA]: ModalData
};

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal {...modalProps} />;
};

const mapStateToProps = state => state.modal;

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideModal: () => {
            dispatch(actions.hideModal());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalRoot);

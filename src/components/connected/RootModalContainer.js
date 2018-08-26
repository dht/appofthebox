import {connect} from "react-redux";
import React, { Component } from "react";
import {types} from "../../reducers/modal/modal";

import ModalIconLibrary from "./ModalIconLibraryContainer";
import ModalData from "./ModalDataContainer";

const MODAL_COMPONENTS = {
    [types.ICON_GALLERY]: ModalIconLibrary,
    [types.DATA]: ModalData,
};

const ModalRoot = ({ modalType, modalProps }) => {

    console.log('modalType ->', modalType);
    
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return (
            <SpecificModal {...modalProps} />
    );
};

const mapStateToProps = state => state.modal

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


import {connect} from "react-redux";
import React, { Component } from "react";
import {types} from "../../reducers/modal/modal";

import IconLibrary from "./ModalIconLibraryContainer";
import Data from "./ModalDataContainer";

const MODAL_COMPONENTS = {
    [types.ICON_GALLERY]: IconLibrary,
    [types.DATA]: Data,
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

export default connect(state => state.modal)(ModalRoot);

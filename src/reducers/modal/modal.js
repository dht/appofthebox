export const types = {
    ICON_GALLERY: "ICON_GALLERY",
    "DATA": "DATA"
};

const initialState = {
    modalType: null,
    modalProps: {}
};

const actionTypes = {
    SHOW_MODAL: "SHOW_MODAL",
    HIDE_MODAL: "HIDE_MODAL"
};

export const modal = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                modalType: action.modalType,
                modalProps: action.modalProps
            };

        case actionTypes.HIDE_MODAL:
            return initialState;

        default:
            return state;
    }
};

export const showModal = (modalType, modalProps) => ({type: actionTypes.SHOW_MODAL,modalType, modalProps}); // prettier-ignore
export const hideModal = () => ({type: actionTypes.HIDE_MODAL}); // prettier-ignore

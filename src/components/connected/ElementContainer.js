import React from "react";
import { connect } from "react-redux";
import Element from "../../layout_modules/element/Element";
import { elementsSelector } from "../../selectors/selectors";
import { patchEditorState, patchData } from "../../reducers/appState/appState";
import * as api from "../../utils/firebase";
import * as thunks from "../../reducers/app_thunks";
import * as modal from "../../reducers/modal/modal";

const mapStateToProps = (state, ownProps) => {
    const elements = elementsSelector(state),
        element = elements[ownProps.id - 1];

    return {
        elements,
        element
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMouseEnter: ev => {
            ev.stopPropagation();
            dispatch(
                patchEditorState({
                    currentHoverId: ownProps.id,
                    hoverBox: box(ev),
                    hoverElement: element(ev)
                })
            );
        },
        onClick: ev => {
            ev.stopPropagation();

            api.setElementId(ownProps.id);

            dispatch(
                patchEditorState({
                    currentElementId: ownProps.id,
                    selectedBox: box(ev),
                    selectedElement: element(ev)
                })
            );
        },
        onTextChange: (element) => {
            const {data} = element;
            const {_value} = data;

            dispatch(
                modal.showModal(modal.types.DATA, {
                    value: _value,
                    onSave: value => {
                        dispatch(thunks.patchData({_value: value}));
                    }
                })
            );

        },
        onMouseLeave: ev => {
            dispatch(patchEditorState({ currentHoverId: 0, hoverBox: {} }));
        }
    };
};

const element = ev => {
    let el = ev.target;

    if (el.tagName === "SPAN") {
        el = el.parentNode;
    }

    return el;
};

const box = ev => {
    return element(ev).getBoundingClientRect();
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Element);

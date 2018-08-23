import React from "react";
import { connect } from "react-redux";
import Element from "./Element";
import { elementsSelector } from "../../selectors/selectors";
import { patchEditorState } from "../../reducers/appState/appState";

const mapStateToProps = (state, ownProps) => {
    const elements = elementsSelector(state),
        element = elements[ownProps.id];

    return {
        elements,
        element
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMouseEnter: ev => {
            dispatch(
                patchEditorState({
                    currentHoverId: ownProps.id,
                    hoverBox: box(ev)
                })
            );
        },
        onClick: ev => {
            dispatch(
                patchEditorState({
                    currentElementId: ownProps.id,
                    selectedBox: box(ev)
                })
            );
        },
        onMouseLeave: ev => {
            dispatch(patchEditorState({ currentHoverId: 0, hoverBox: {} }));
        }
    };
};

const box = ev => {
    let el = ev.target;

    if (el.tagName === "SPAN") {
        el = el.parentNode;
    }

    return el.getBoundingClientRect();
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Element);

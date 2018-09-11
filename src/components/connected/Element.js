import { connect } from "react-redux";
import Element from "../../layout_modules/element/Element";
import { elementsSelector } from "../../selectors/selectors";
import { patchEditorState, patchData } from "../../reducers/appState/appState";
import * as api from "../../utils/firebase";
import * as thunks from "../../reducers/app_thunks";
import * as modal from "../../reducers/modal/modal";

// TODO: check whether using a container instead of cascading elements is rendered faster
// current approach may lead to rendering entire of the tree when the root changes

const mapStateToProps = (state, ownProps) => {
    const elements = elementsSelector(state);

    return {
        elements
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (ev, id) => {
            api.setElementId(id);

            dispatch(
                patchEditorState({
                    currentElementId: id,
                    selectedBox: box(ev)
                    // selectedElement: element(ev)
                })
            );
        },
        onTextChange: (ev, id, element) => {
            const { data } = element;
            const { _value } = data;

            dispatch(
                modal.showModal(modal.types.DATA, {
                    value: _value,
                    onSave: value => {
                        dispatch(thunks.patchData({ _value: value }));
                    }
                })
            );
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
    const { top, left, width, height } = element(ev).getBoundingClientRect();

    return {
        top,
        left,
        width,
        height
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Element);

import * as api from "../utils/firebase";
import * as actions from "../reducers/appState/appState";
import { arrayToObject } from "../utils/map";

export const loadApp = (bucketId, componentId, resolutionId) => {
    return async dispatch => {
        api.setBucketId(bucketId);

        dispatch(
            actions.patchEditorState({
                isLoading: true,
                currentBucketId: bucketId,
                currentPhoneId: 0,
                currentElementId: 1
            })
        );

        const phones = await api.getPhones();
        const resolutions = await api.getResolutions();
        const bucket = await api.getBucket();

        dispatch(actions.setBucket(bucket));
        dispatch(actions.setPhoneResolutions(arrayToObject(resolutions)));
        dispatch(actions.setPhones(arrayToObject(phones)));
        dispatch(
            actions.patchEditorState({
                isLoading: false,
                currentComponentId: componentId,
                currentResolutionId: resolutionId
            })
        );
    };
};

export const refreshBoxes = () => {
    return (dispatch, getState) => {
        const state = getState(),
            { editorState } = state,
            { hoverElement, selectedElement } = editorState;

        dispatch(
            actions.patchEditorState({
                selectedBox: {},
                hoverBox: {}
            })
        );

        setTimeout(() => {
            const selectedBox = selectedElement.getBoundingClientRect();
            const hoverBox = hoverElement.getBoundingClientRect();

            dispatch(
                actions.patchEditorState({
                    selectedBox: selectedBox,
                    hoverBox: hoverElement
                })
            );
        }, 300);
    };
};

export const autosave = () => {};

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
                currentElementId: 1
            })
        );

        const phones = await api.getPhones();
        const resolutions = await api.getResolutions();
        const bucket = await api.getBucket();

        api.setBucketId(bucketId);
        api.setComponentId(componentId);
        api.setResolutionId(resolutionId);

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

export const patchProperty = value => {
    return (dispatch, getState) => {
        const state = getState(),
            { editorState } = state,
            {
                currentBucketId,
                currentComponentId,
                currentElementId,
                currentResolutionId
            } = editorState;

        dispatch(
            actions.patchProperties(
                currentBucketId,
                currentComponentId,
                currentElementId,
                currentResolutionId,
                value
            )
        );
    };
};

export const refreshBoxes = () => {
    return (dispatch, getState) => {
        const state = getState(),
            { editorState } = state,
            { selectedElement } = editorState;

        dispatch(
            actions.patchEditorState({
                selectedBox: {}
            })
        );

        if (!selectedElement) return;

        setTimeout(() => {
            const selectedBox = selectedElement.getBoundingClientRect();

            dispatch(
                actions.patchEditorState({
                    selectedBox: selectedBox
                })
            );
        }, 300);
    };
};

export const autosave = () => {};

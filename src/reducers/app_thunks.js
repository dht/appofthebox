import * as api from "../utils/firebase";
import * as actions from "../reducers/appState/appState";
import { arrayToObject } from "../utils/map";
import * as parsers from "../selectors/parsers";
import { templates } from "../constants/elementTypes";
import * as selectors from "../selectors/selectors";
import * as mocks from "./_mock";

export const loadAppJson = (bucketId, componentId, resolutionId) => {
    return dispatch => {
        dispatch(actions.setBucket(mocks.bucket));
        dispatch(actions.setPhoneResolutions(mocks.resolutions));
        dispatch(actions.setPhones(mocks.phones));
        dispatch(
            actions.patchEditorState({
                isLoading: false,
                currentComponentId: componentId,
                currentResolutionId: resolutionId
            })
        );
    };
};

export const loadApp = (bucketId, componentId, resolutionId) => {
    return async dispatch => {
        return dispatch(loadAppJson(bucketId, componentId, resolutionId));

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
        let bucket = await api.getBucket();

        api.setBucketId(bucketId);
        api.setComponentId(componentId);
        api.setResolutionId(resolutionId);

        // bucket = parsers.parseBucket(bucket);
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
                currentComponentId,
                currentElementId,
                currentResolutionId
            } = editorState;

        dispatch(
            actions.patchProperties(
                currentComponentId,
                currentElementId,
                currentResolutionId,
                value
            )
        );

        dispatch(refreshBoxes(50));
    };
};

export const patchData = data => {
    return (dispatch, getState) => {
        const state = getState(),
            { editorState } = state,
            {
                currentComponentId,
                currentElementId,
                currentResolutionId
            } = editorState;

        dispatch(actions.patchData(currentComponentId, currentElementId, data));

        dispatch(refreshBoxes(50));
    };
};

export const refreshBoxes = (delay = 300) => {
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
        }, delay);
    };
};

export const addElement = type => {
    return (dispatch, getState) => {
        const state = getState(),
            newItemData = selectors.newItemSelector(state);

        const factory = templates[type];

        if (!factory || !newItemData) return;

        const { componentId, parentId, id } = newItemData;
        const elements = factory(id, parentId);

        for (let cnt = 0; cnt < elements.length; cnt++) {
            dispatch(actions.setElement(componentId, id + cnt, elements[cnt]));
        }
    };
};

export const autosave = () => {};

import { createSelector } from 'reselect'
import {methodsToGlobal} from "../utils/code";

export const isLoadingSelector = state => state.editorState.isLoading;
export const bucketSelector = state => state.bucket;
export const currentComponentIdSelector = state => state.editorState.currentComponentId;
export const currentElementIdSelector = state => state.editorState.currentElementId;
export const currentResolutionIdSelector = state => state.editorState.currentResolutionId;

export const elementsSelector = createSelector(
    bucketSelector,
    currentComponentIdSelector,
    currentElementIdSelector,
    currentResolutionIdSelector,
    (bucket, componentId, elementId, resolutionId) => {
        const elements = bucket.components[componentId].elements[elementId].resolutions[resolutionId];

        console.log('elements ->', elements);
        
        return elements;
    }
)


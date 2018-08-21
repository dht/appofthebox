import { createSelector } from 'reselect'
import {methodsToGlobal} from "../utils/code";

export const bucketSelector = state => state.bucket;
export const phoneSelector = state => state.editorState.phone;
export const currentComponentIdSelector = state => state.editorState.currentComponentId;
export const currentElementIdSelector = state => state.editorState.currentElementId;
export const currentResolutionIdSelector = state => state.editorState.currentResolutionId;
export const simulateTitlebarSelector = state => state.editorState.simulateTitlebar;
export const simulateTabSelector = state => state.editorState.simulateTab;
export const simulateListSelector = state => state.editorState.simulateList;


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


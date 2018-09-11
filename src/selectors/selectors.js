import { createSelector } from "reselect";
import { methodsToGlobal } from "../utils/code";
import { arrayToObject, objectToArray } from "../utils/map";
import { crunchResolutions } from "../utils/style";
import clone from "clone";
import { PropertiesArray } from "../constants/allProperties";

export const editorStateSelector = state => state.editorState || {};

export const bucketSelector = state => state.bucket || {};

export const phonesSelector = state => state.phones;
export const phoneResolutionsSelector = state => state.phoneResolutions;

export const isLoadingSelector = createSelector(
    editorStateSelector,
    editorState => editorState.isLoading
);

export const currentComponentIdSelector = createSelector(
    editorStateSelector,
    editorState => editorState.currentComponentId
);

export const currentElementIdSelector = createSelector(
    editorStateSelector,
    editorState => editorState.currentElementId
);

export const currentResolutionIdSelector = createSelector(
    editorStateSelector,
    editorState => editorState.currentResolutionId
);

export const currentResolutionSelector = createSelector(
    phoneResolutionsSelector,
    currentResolutionIdSelector,
    (resolutions, resolutionId) => resolutions[resolutionId]
);

export const componentSelector = createSelector(
    bucketSelector,
    currentComponentIdSelector,
    (bucket, componentId) => {
        const components = bucket.components || {};
        const component = components[componentId] || {};

        return component;
    }
);

export const elementsArraySelector = createSelector(
    componentSelector,
    component => objectToArray(component.elements) || []
);

export const elementsSelector = createSelector(
    elementsArraySelector,
    currentResolutionIdSelector,
    (elements, resolutionId) => {
        return elements.map(element => {
            const newElement = element;
            const { resolutions } = newElement;

            newElement.properties = crunchResolutions(
                resolutions,
                resolutionId
            );
            newElement.localProperties = (
                resolutions[resolutionId] || {}
            ).properties;

            newElement.resolution = resolutionId;

            return newElement;
        });
    }
);

export const elementSelector = createSelector(
    elementsSelector,
    currentElementIdSelector,
    currentResolutionIdSelector,
    (elements, elementId, resolutionId) => {
        const element = elements[elementId - 1] || {};
        const { resolutions = [] } = element;

        element.properties = crunchResolutions(resolutions, resolutionId);
        element.localProperties = (resolutions[resolutionId] || {}).properties;

        return element;
    }
);

export const propertiesSelector = createSelector(
    elementSelector,
    currentResolutionIdSelector,
    (element, resolution) => {
        const { properties = {}, localProperties = {} } = element;

        return PropertiesArray.map(property => {
            return {
                key: property,
                value: localProperties[property],
                placeholder: properties[property],
                resolution // for refresh purpose
            };
        }, []);
    }
);

export const resolutionsSelector = createSelector(
    phonesSelector,
    phoneResolutionsSelector,
    (phones, resolutions) => {
        const keys = Object.keys(resolutions);

        return keys
            .map(key => resolutions[key])
            .map(item => {
                item.phone = phones[item.examplePhoneId];
                return item;
            })
            .sort((a, b) => {
                const xBigger = a.viewport.x > b.viewport.x;
                const yBigger = a.viewport.y > b.viewport.y;

                if (a.viewport.x === b.viewport.x) {
                    if (a.viewport.y === b.viewport.y) return 0;

                    return yBigger ? 1 : -1;
                }

                return xBigger ? 1 : -1;
            });
    }
);

export const selectedBoxSelector = createSelector(
    editorStateSelector,
    editorState => ({
        elementId: editorState.currentElementId,
        box: editorState.selectedBox
    })
);

export const newItemSelector = createSelector(
    currentComponentIdSelector,
    elementsSelector,
    elementSelector,
    (componentId, elements, element) => {
        const max = Object.keys(elements || {}).reduce(
            (output, key) => Math.max(output, elements[key].id || 0),
            0
        );

        const { parentId } = element || {};

        if (!parentId) return;

        return { componentId, parentId, id: max + 1 };
    }
);

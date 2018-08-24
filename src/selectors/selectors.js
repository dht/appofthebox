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
    (component) => objectToArray(component.elements) || []
);

export const elementsSelector = createSelector(
    elementsArraySelector,
    currentResolutionIdSelector,
    (elements, resolutionId) => {
        return elements.map(element => {
            const { resolutions } = element;

            element.properties = crunchResolutions(resolutions, resolutionId);
            element.localProperties = (
                resolutions[resolutionId] || {}
            ).properties;

            return element;
        });
    }
);

export const elementSelector = createSelector(
    elementsSelector,
    currentElementIdSelector,
    currentResolutionIdSelector,
    (elements, elementId, resolutionId) => {
        const element = clone(elements[elementId] || {});
        const { resolutions = [] } = element;

        element.properties = crunchResolutions(resolutions, resolutionId);
        element.localProperties = (resolutions[resolutionId] || {}).properties;

        return element;
    }
);

export const propertiesSelector = createSelector(
    elementSelector,
    (element) => {

        const {properties = {} , localProperties = {}} = element;
        
        return PropertiesArray.map(property => {
            return {
                key: property,
                value: properties[property],
                placeholder: localProperties[property]
            }
        },[]);
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


export const hoverBoxSelector = createSelector(
    editorStateSelector,
    editorState => ({
        elementId: editorState.currentHoverId,
        box: editorState.hoverBox,
        rnd: editorState.rnd
    })
);

export const selectedBoxSelector = createSelector(
    editorStateSelector,
    editorState => ({
        elementId: editorState.currentElementId,
        box: editorState.selectedBox,
    })
);

import { initialStateEditor, initialStateBucket } from "./initialState";

export const setEditorState = (value) => ({type: "SET_EDITORSTATE", value}); // prettier-ignore
export const patchEditorState = (value) => ({type: "PATCH_EDITORSTATE", value}); // prettier-ignore
export const setBucket = (value) => ({type: "SET_BUCKET", value}); // prettier-ignore
export const patchBucket = (value) => ({type: "PATCH_BUCKET", value}); // prettier-ignore
export const setComponents = (value) => ({type: "SET_BUCKET_COMPONENTS", value}); // prettier-ignore
export const setComponent = (componentId, value) => ({type: "SET_BUCKET_COMPONENT", componentId, value}); // prettier-ignore
export const patchComponent = (componentId, value) => ({type: "PATCH_BUCKET_COMPONENT", componentId, value}); // prettier-ignore
export const deleteComponent = (componentId, value) => ({type: "DELETE_BUCKET_COMPONENT"}); // prettier-ignore
export const setViewOption = (componentId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTIONS", componentId, value}); // prettier-ignore
export const patchViewOption = (componentId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTIONS", componentId, value}); // prettier-ignore
export const setSimulateTitlebar = (componentId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR", componentId, value}); // prettier-ignore
export const patchSimulateTitlebar = (componentId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR", componentId, value}); // prettier-ignore
export const setSimulateTab = (componentId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB", componentId, value}); // prettier-ignore
export const patchSimulateTab = (componentId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB", componentId, value}); // prettier-ignore
export const setSimulateList = (componentId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST", componentId, value}); // prettier-ignore
export const patchSimulateList = (componentId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST", componentId, value}); // prettier-ignore
export const setElements = (elementId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENTS", elementId, value}); // prettier-ignore
export const setElement = (componentId, elementId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT", componentId, elementId, value}); // prettier-ignore
export const patchElement = (componentId, elementId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT", componentId, elementId, value}); // prettier-ignore
export const deleteElement = (componentId, elementId, value) => ({type: "DELETE_BUCKET_COMPONENT_ELEMENT"}); // prettier-ignore
export const setResolutions = (elementId, resolutionId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS", elementId, resolutionId, value}); // prettier-ignore
export const setResolution = (componentId, elementId, resolutionId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION", componentId, elementId, resolutionId, value}); // prettier-ignore
export const patchResolution = (componentId, elementId, resolutionId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION", componentId, elementId, resolutionId, value}); // prettier-ignore
export const deleteResolution = (componentId, elementId, resolutionId, value) => ({type: "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION"}); // prettier-ignore
export const setProperties = (componentId, elementId, resolutionId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES", componentId, elementId, resolutionId, value}); // prettier-ignore
export const patchProperties = (componentId, elementId, resolutionId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES", componentId, elementId, resolutionId, value}); // prettier-ignore
export const setData = (componentId, elementId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_DATA", componentId, elementId, value}); // prettier-ignore
export const patchData = (componentId, elementId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT_DATA", componentId, elementId, value}); // prettier-ignore
export const setPhoneResolutions = (value) => ({type: "SET_PHONERESOLUTIONS", value}); // prettier-ignore
export const setPhoneResolution = (phoneResolutionId, value) => ({type: "SET_PHONERESOLUTION", phoneResolutionId, value}); // prettier-ignore
export const patchPhoneResolution = (phoneResolutionId, value) => ({type: "PATCH_PHONERESOLUTION", phoneResolutionId, value}); // prettier-ignore
export const deletePhoneResolution = (phoneResolutionId, value) => ({type: "DELETE_PHONERESOLUTION"}); // prettier-ignore
export const setPixel = (phoneResolutionId, value) => ({type: "SET_PHONERESOLUTION_PIXELS", phoneResolutionId, value}); // prettier-ignore
export const patchPixel = (phoneResolutionId, value) => ({type: "PATCH_PHONERESOLUTION_PIXELS", phoneResolutionId, value}); // prettier-ignore
export const setViewport = (phoneResolutionId, value) => ({type: "SET_PHONERESOLUTION_VIEWPORT", phoneResolutionId, value}); // prettier-ignore
export const patchViewport = (phoneResolutionId, value) => ({type: "PATCH_PHONERESOLUTION_VIEWPORT", phoneResolutionId, value}); // prettier-ignore
export const setPhones = (value) => ({type: "SET_PHONES", value}); // prettier-ignore
export const setPhone = (phoneId, value) => ({type: "SET_PHONE", phoneId, value}); // prettier-ignore
export const patchPhone = (phoneId, value) => ({type: "PATCH_PHONE", phoneId, value}); // prettier-ignore
export const deletePhone = (phoneId, value) => ({type: "DELETE_PHONE"}); // prettier-ignore

export const phone = (state, action) => {
    switch (action.type) {
        case "SET_PHONES":
            return action.value;

        case "SET_PHONE":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const phones = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case "SET_PHONES":
            return action.value;

        case "SET_PHONE":
        case "PATCH_PHONE":
            return {
                ...state,
                [action.phoneId]: phone(state[action.phoneId], action)
            };

        case "DELETE_PHONE":
            newState = { ...state };
            delete newState[action.phoneId];
            return newState;

        default:
            return state;
    }
};

export const viewport = (state, action) => {
    switch (action.type) {
        case "SET_PHONERESOLUTION_VIEWPORT":
            return action.value;

        case "PATCH_PHONERESOLUTION_VIEWPORT":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const pixels = (state, action) => {
    switch (action.type) {
        case "SET_PHONERESOLUTION_PIXELS":
            return action.value;

        case "PATCH_PHONERESOLUTION_PIXELS":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const phoneResolution = (state, action) => {
    switch (action.type) {
        case "SET_PHONERESOLUTIONS":
            return action.value;

        case "SET_PHONERESOLUTION":
            return {
                ...state,
                ...action.value
            };

        case "SET_PHONERESOLUTION_PIXELS":
        case "PATCH_PHONERESOLUTION_PIXELS":
            return {
                ...state,
                pixels: pixels(state.pixels, action)
            };
        case "SET_PHONERESOLUTION_VIEWPORT":
        case "PATCH_PHONERESOLUTION_VIEWPORT":
            return {
                ...state,
                viewport: viewport(state.viewport, action)
            };

        default:
            return state;
    }
};

export const phoneResolutions = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case "SET_PHONERESOLUTIONS":
            return action.value;

        case "SET_PHONERESOLUTION_PIXELS":
        case "PATCH_PHONERESOLUTION_PIXELS":
        case "SET_PHONERESOLUTION_VIEWPORT":
        case "PATCH_PHONERESOLUTION_VIEWPORT":
        case "SET_PHONERESOLUTION":
        case "PATCH_PHONERESOLUTION":
            return {
                ...state,
                [action.phoneResolutionId]: phoneResolution(
                    state[action.phoneResolutionId],
                    action
                )
            };

        case "DELETE_PHONERESOLUTION":
            newState = { ...state };
            delete newState[action.phoneResolutionId];
            return newState;

        default:
            return state;
    }
};

export const data = (state, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
            return action.value;

        case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const properties = (state = {}, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
            return action.value;

        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const resolution = (state = {}, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
            return action.value;

        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
            return {
                ...state,
                ...action.value
            };

        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
            return {
                id: state.id || action.resolutionId,
                ...state,
                properties: properties(state.properties, action)
            };

        default:
            return state;
    }
};

export const resolutions = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
            return action.value;

        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
            return {
                ...state,
                [action.resolutionId]: resolution(
                    state[action.resolutionId],
                    action
                )
            };

        case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
            newState = { ...state };
            delete newState[action.resolutionId];
            return newState;

        default:
            return state;
    }
};

export const element = (state = {}, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_ELEMENTS":
            return action.value;

        case "SET_BUCKET_COMPONENT_ELEMENT":
            return {
                ...state,
                ...action.value
            };

        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
            return {
                ...state,
                resolutions: resolutions(state.resolutions, action)
            };
        case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
            return {
                ...state,
                data: data(state.data, action)
            };

        default:
            return state;
    }
};

export const elements = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case "SET_BUCKET_COMPONENT_ELEMENTS":
            return action.value;

        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
        case "SET_BUCKET_COMPONENT_ELEMENT":
        case "PATCH_BUCKET_COMPONENT_ELEMENT":
            return {
                ...state,
                [action.elementId]: element(state[action.elementId], action)
            };

        case "DELETE_BUCKET_COMPONENT_ELEMENT":
            newState = { ...state };
            delete newState[action.elementId];
            return newState;

        default:
            return state;
    }
};

export const simulateList = (state, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
            return action.value;

        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const simulateTab = (state, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
            return action.value;

        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const simulateTitlebar = (state, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
            return action.value;

        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

export const viewOptions = (state = {}, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS":
            return action.value;

        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS":
            return {
                ...state,
                ...action.value
            };

        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
            return {
                ...state,
                simulateTitlebar: simulateTitlebar(
                    state.simulateTitlebar,
                    action
                )
            };
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
            return {
                ...state,
                simulateTab: simulateTab(state.simulateTab, action)
            };
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
            return {
                ...state,
                simulateList: simulateList(state.simulateList, action)
            };

        default:
            return state;
    }
};

export const component = (state = {}, action) => {
    switch (action.type) {
        case "SET_BUCKET_COMPONENTS":
            return action.value;

        case "SET_BUCKET_COMPONENT":
            return {
                ...state,
                ...action.value
            };

        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS":
            return {
                ...state,
                viewOptions: viewOptions(state.viewOptions, action)
            };
        case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "SET_BUCKET_COMPONENT_ELEMENTS":
        case "SET_BUCKET_COMPONENT_ELEMENT":
        case "PATCH_BUCKET_COMPONENT_ELEMENT":
        case "DELETE_BUCKET_COMPONENT_ELEMENT":
            return {
                ...state,
                elements: elements(state.elements, action)
            };

        default:
            return state;
    }
};

export const components = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case "SET_BUCKET_COMPONENTS":
            return action.value;

        case "SET_BUCKET_COMPONENT_VIEWOPTIONS":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
        case "SET_BUCKET_COMPONENT_ELEMENTS":
        case "SET_BUCKET_COMPONENT_ELEMENT":
        case "PATCH_BUCKET_COMPONENT_ELEMENT":
        case "DELETE_BUCKET_COMPONENT_ELEMENT":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
        case "SET_BUCKET_COMPONENT":
        case "PATCH_BUCKET_COMPONENT":
            return {
                ...state,
                [action.componentId]: component(
                    state[action.componentId],
                    action
                )
            };

        case "DELETE_BUCKET_COMPONENT":
            newState = { ...state };
            delete newState[action.componentId];
            return newState;

        default:
            return state;
    }
};

export const bucket = (state = initialStateBucket, action) => {
    switch (action.type) {
        case "SET_BUCKET":
            return action.value;

        case "PATCH_BUCKET":
            return {
                ...state,
                ...action.value
            };

        case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
        case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        case "SET_BUCKET_COMPONENT_ELEMENTS":
        case "SET_BUCKET_COMPONENT_ELEMENT":
        case "PATCH_BUCKET_COMPONENT_ELEMENT":
        case "DELETE_BUCKET_COMPONENT_ELEMENT":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATELIST":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETAB":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS_SIMULATETITLEBAR":
        case "SET_BUCKET_COMPONENT_VIEWOPTIONS":
        case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS":
        case "SET_BUCKET_COMPONENTS":
        case "SET_BUCKET_COMPONENT":
        case "PATCH_BUCKET_COMPONENT":
        case "DELETE_BUCKET_COMPONENT":
            return {
                ...state,
                components: components(state.components, action)
            };

        default:
            return state;
    }
};

export const editorState = (state = initialStateEditor, action) => {
    switch (action.type) {
        case "SET_EDITORSTATE":
            return action.value;

        case "PATCH_EDITORSTATE":
            return {
                ...state,
                ...action.value
            };

        default:
            return state;
    }
};

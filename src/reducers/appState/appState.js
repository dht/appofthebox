import {initialStateEditor, initialStateBucket} from "./initialState";

export const editorState = (state, action) => {
    switch(action.type) {
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
  }
  
  export const setEditorState = (value) => ({type: "SET_EDITORSTATE", value});
  export const patchEditorState = (value) => ({type: "PATCH_EDITORSTATE", value})
  
  export const bucket = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET":
        return action.value;
        
      case "PATCH_BUCKET":
        return {
          ...state,
          ...action.value
        };
        
    case "SET_BUCKET_COMPONENTS":
    case "SET_BUCKET_COMPONENT":
    case "PATCH_BUCKET_COMPONENT":
    case "DELETE_BUCKET_COMPONENT":
       
      return {
          ...state,
          components: components(state.components, action)
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION":
        
      return {
          ...state,
          viewOptions: viewOptions(state.viewOptions, action)
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
        
      return {
          ...state,
          simulateTitlebar: simulateTitlebar(state.simulateTitlebar, action)
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
        
      return {
          ...state,
          simulateTab: simulateTab(state.simulateTab, action)
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
        
      return {
          ...state,
          simulateList: simulateList(state.simulateList, action)
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENTS":
    case "SET_BUCKET_COMPONENT_ELEMENT":
    case "PATCH_BUCKET_COMPONENT_ELEMENT":
    case "DELETE_BUCKET_COMPONENT_ELEMENT":
       
      return {
          ...state,
          elements: elements(state.elements, action)
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
       
      return {
          ...state,
          resolutions: resolutions(state.resolutions, action)
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
      return {
          ...state,
          properties: properties(state.properties, action)
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
  }
  
  export const buckets = (state, action) => {
    let newState;
    
    switch(action.type) {
      case "SET_BUCKETS":
        return action.value;
        
      
    case "SET_BUCKET_COMPONENTS":
    case "SET_BUCKET_COMPONENT":
    case "PATCH_BUCKET_COMPONENT":
    case "DELETE_BUCKET_COMPONENT":
       
    case "SET_BUCKET_COMPONENT_VIEWOPTION":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION":
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
        
    case "SET_BUCKET_COMPONENT_ELEMENTS":
    case "SET_BUCKET_COMPONENT_ELEMENT":
    case "PATCH_BUCKET_COMPONENT_ELEMENT":
    case "DELETE_BUCKET_COMPONENT_ELEMENT":
       
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
       
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
    case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
        
      case "SET_BUCKET":
      case "PATCH_BUCKET":
        return {
          ...state,
          [action.bucketId]: bucket(state[action.bucketId], action)
        };
        
      case "DELETE_BUCKET":
        newState = { ...state };
        delete newState[action.bucketId];
        return newState;
      
      default:
        return state;
    }
  }
  
  export const setBuckets = (value) => ({type: "SET_BUCKETS", value});
  export const setBucket = (bucketId, value) => ({type: "SET_BUCKET", bucketId, value})
  export const patchBucket = (bucketId, value) => ({type: "PATCH_BUCKET", bucketId, value})
  export const deleteBucket = (bucketId, value) => ({type: "DELETE_BUCKET", bucketId, value})
  
  export const component = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET_COMPONENT":
        return action.value;
        
      case "PATCH_BUCKET_COMPONENT":
        return {
          ...state,
          ...action.value
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION":
        
      return {
          ...state,
          viewOptions: viewOptions(state.viewOptions, action)
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
        
      return {
          ...state,
          simulateTitlebar: simulateTitlebar(state.simulateTitlebar, action)
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
        
      return {
          ...state,
          simulateTab: simulateTab(state.simulateTab, action)
        };
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
        
      return {
          ...state,
          simulateList: simulateList(state.simulateList, action)
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENTS":
    case "SET_BUCKET_COMPONENT_ELEMENT":
    case "PATCH_BUCKET_COMPONENT_ELEMENT":
    case "DELETE_BUCKET_COMPONENT_ELEMENT":
       
      return {
          ...state,
          elements: elements(state.elements, action)
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
       
      return {
          ...state,
          resolutions: resolutions(state.resolutions, action)
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
      return {
          ...state,
          properties: properties(state.properties, action)
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
  }
  
  export const components = (state, action) => {
    let newState;
    
    switch(action.type) {
      case "SET_BUCKET_COMPONENTS":
        return action.value;
        
      
    case "SET_BUCKET_COMPONENT_VIEWOPTION":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION":
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
        
    case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
    case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
        
    case "SET_BUCKET_COMPONENT_ELEMENTS":
    case "SET_BUCKET_COMPONENT_ELEMENT":
    case "PATCH_BUCKET_COMPONENT_ELEMENT":
    case "DELETE_BUCKET_COMPONENT_ELEMENT":
       
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
       
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
    case "SET_BUCKET_COMPONENT_ELEMENT_DATA":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_DATA":
        
      case "SET_BUCKET_COMPONENT":
      case "PATCH_BUCKET_COMPONENT":
        return {
          ...state,
          [action.componentId]: component(state[action.componentId], action)
        };
        
      case "DELETE_BUCKET_COMPONENT":
        newState = { ...state };
        delete newState[action.componentId];
        return newState;
      
      default:
        return state;
    }
  }
  
  export const setComponents = (bucketId, value) => ({type: "SET_BUCKET_COMPONENTS", bucketId, value});
  export const setComponent = (bucketId, componentId, value) => ({type: "SET_BUCKET_COMPONENT", bucketId, componentId, value})
  export const patchComponent = (bucketId, componentId, value) => ({type: "PATCH_BUCKET_COMPONENT", bucketId, componentId, value})
  export const deleteComponent = (bucketId, componentId, value) => ({type: "DELETE_BUCKET_COMPONENT", bucketId, componentId, value})
  
  export const viewOptions = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_VIEWOPTIONS":
        return action.value;
        
      case "PATCH_BUCKET_COMPONENT_VIEWOPTIONS":
        return {
          ...state,
          ...action.value
        };
        
    case "SET_BUCKET_COMPONENT_SIMULATETITLEBAR":
    case "PATCH_BUCKET_COMPONENT_SIMULATETITLEBAR":
        
      return {
          ...state,
          simulateTitlebar: simulateTitlebar(state.simulateTitlebar, action)
        };
        
    case "SET_BUCKET_COMPONENT_SIMULATETAB":
    case "PATCH_BUCKET_COMPONENT_SIMULATETAB":
        
      return {
          ...state,
          simulateTab: simulateTab(state.simulateTab, action)
        };
        
    case "SET_BUCKET_COMPONENT_SIMULATELIST":
    case "PATCH_BUCKET_COMPONENT_SIMULATELIST":
        
      return {
          ...state,
          simulateList: simulateList(state.simulateList, action)
        };
        
      default:
        return state;
    }
  }
  
  export const setViewOptions = (bucketId, componentId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTIONS", bucketId, componentId, value});
  export const patchViewOptions = (bucketId, componentId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTIONS", bucketId, componentId, value})
  
  export const simulateTitlebar = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
        return action.value;
        
      case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR":
        return {
          ...state,
          ...action.value
        };
        
      default:
        return state;
    }
  }
  
  export const setSimulateTitlebar = (bucketId, componentId, viewOptionId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR", bucketId, componentId, viewOptionId, value});
  export const patchSimulateTitlebar = (bucketId, componentId, viewOptionId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETITLEBAR", bucketId, componentId, viewOptionId, value})
  
  export const simulateTab = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
        return action.value;
        
      case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB":
        return {
          ...state,
          ...action.value
        };
        
      default:
        return state;
    }
  }
  
  export const setSimulateTab = (bucketId, componentId, viewOptionId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB", bucketId, componentId, viewOptionId, value});
  export const patchSimulateTab = (bucketId, componentId, viewOptionId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATETAB", bucketId, componentId, viewOptionId, value})
  
  export const simulateList = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
        return action.value;
        
      case "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST":
        return {
          ...state,
          ...action.value
        };
        
      default:
        return state;
    }
  }
  
  export const setSimulateList = (bucketId, componentId, viewOptionId, value) => ({type: "SET_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST", bucketId, componentId, viewOptionId, value});
  export const patchSimulateList = (bucketId, componentId, viewOptionId, value) => ({type: "PATCH_BUCKET_COMPONENT_VIEWOPTION_SIMULATELIST", bucketId, componentId, viewOptionId, value})
  
  export const element = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_ELEMENT":
        return action.value;
        
      case "PATCH_BUCKET_COMPONENT_ELEMENT":
        return {
          ...state,
          ...action.value
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
       
      return {
          ...state,
          resolutions: resolutions(state.resolutions, action)
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
      return {
          ...state,
          properties: properties(state.properties, action)
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
  }
  
  export const elements = (state, action) => {
    let newState;
    
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_ELEMENTS":
        return action.value;
        
      
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
    case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
       
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
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
  }
  
  export const setElements = (bucketId, componentId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENTS", bucketId, componentId, value});
  export const setElement = (bucketId, componentId, elementId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT", bucketId, componentId, elementId, value})
  export const patchElement = (bucketId, componentId, elementId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT", bucketId, componentId, elementId, value})
  export const deleteElement = (bucketId, componentId, elementId, value) => ({type: "DELETE_BUCKET_COMPONENT_ELEMENT", bucketId, componentId, elementId, value})
  
  export const resolution = (state, action) => {
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        return action.value;
        
      case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        return {
          ...state,
          ...action.value
        };
        
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
      return {
          ...state,
          properties: properties(state.properties, action)
        };
        
      default:
        return state;
    }
  }
  
  export const resolutions = (state, action) => {
    let newState;
    
    switch(action.type) {
      case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS":
        return action.value;
        
      
    case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
    case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTY":
        
      case "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
      case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        return {
          ...state,
          [action.resolutionId]: resolution(state[action.resolutionId], action)
        };
        
      case "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION":
        newState = { ...state };
        delete newState[action.resolutionId];
        return newState;
      
      default:
        return state;
    }
  }
  
  export const setResolutions = (bucketId, componentId, elementId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTIONS", bucketId, componentId, elementId, value});
  export const setResolution = (bucketId, componentId, elementId, resolutionId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION", bucketId, componentId, elementId, resolutionId, value})
  export const patchResolution = (bucketId, componentId, elementId, resolutionId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION", bucketId, componentId, elementId, resolutionId, value})
  export const deleteResolution = (bucketId, componentId, elementId, resolutionId, value) => ({type: "DELETE_BUCKET_COMPONENT_ELEMENT_RESOLUTION", bucketId, componentId, elementId, resolutionId, value})
  
  export const properties = (state, action) => {
    switch(action.type) {
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
  }
  
  export const setProperties = (bucketId, componentId, elementId, resolutionId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES", bucketId, componentId, elementId, resolutionId, value});
  export const patchProperties = (bucketId, componentId, elementId, resolutionId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES", bucketId, componentId, elementId, resolutionId, value})
  
  export const data = (state, action) => {
    switch(action.type) {
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
  }
  
  export const setData = (bucketId, componentId, elementId, value) => ({type: "SET_BUCKET_COMPONENT_ELEMENT_DATA", bucketId, componentId, elementId, value});
  export const patchData = (bucketId, componentId, elementId, value) => ({type: "PATCH_BUCKET_COMPONENT_ELEMENT_DATA", bucketId, componentId, elementId, value})
  
  export const resolution = (state, action) => {
    switch(action.type) {
      case "SET_RESOLUTION":
        return action.value;
        
      case "PATCH_RESOLUTION":
        return {
          ...state,
          ...action.value
        };
        
    case "SET_RESOLUTION_PIXEL":
    case "PATCH_RESOLUTION_PIXEL":
        
      return {
          ...state,
          pixels: pixels(state.pixels, action)
        };
        
    case "SET_RESOLUTION_VIEWPORT":
    case "PATCH_RESOLUTION_VIEWPORT":
        
      return {
          ...state,
          viewport: viewport(state.viewport, action)
        };
        
      default:
        return state;
    }
  }
  
  export const resolutions = (state, action) => {
    let newState;
    
    switch(action.type) {
      case "SET_RESOLUTIONS":
        return action.value;
        
      
    case "SET_RESOLUTION_PIXEL":
    case "PATCH_RESOLUTION_PIXEL":
        
    case "SET_RESOLUTION_VIEWPORT":
    case "PATCH_RESOLUTION_VIEWPORT":
        
      case "SET_RESOLUTION":
      case "PATCH_RESOLUTION":
        return {
          ...state,
          [action.resolutionId]: resolution(state[action.resolutionId], action)
        };
        
      case "DELETE_RESOLUTION":
        newState = { ...state };
        delete newState[action.resolutionId];
        return newState;
      
      default:
        return state;
    }
  }
  
  export const setResolutions = (value) => ({type: "SET_RESOLUTIONS", value});
  export const setResolution = (resolutionId, value) => ({type: "SET_RESOLUTION", resolutionId, value})
  export const patchResolution = (resolutionId, value) => ({type: "PATCH_RESOLUTION", resolutionId, value})
  export const deleteResolution = (resolutionId, value) => ({type: "DELETE_RESOLUTION", resolutionId, value})
  
  export const pixels = (state, action) => {
    switch(action.type) {
      case "SET_RESOLUTION_PIXELS":
        return action.value;
        
      case "PATCH_RESOLUTION_PIXELS":
        return {
          ...state,
          ...action.value
        };
        
      default:
        return state;
    }
  }
  
  export const setPixels = (resolutionId, value) => ({type: "SET_RESOLUTION_PIXELS", resolutionId, value});
  export const patchPixels = (resolutionId, value) => ({type: "PATCH_RESOLUTION_PIXELS", resolutionId, value})
  
  export const viewport = (state, action) => {
    switch(action.type) {
      case "SET_RESOLUTION_VIEWPORT":
        return action.value;
        
      case "PATCH_RESOLUTION_VIEWPORT":
        return {
          ...state,
          ...action.value
        };
        
      default:
        return state;
    }
  }
  
  export const setViewport = (resolutionId, value) => ({type: "SET_RESOLUTION_VIEWPORT", resolutionId, value});
  export const patchViewport = (resolutionId, value) => ({type: "PATCH_RESOLUTION_VIEWPORT", resolutionId, value})
  
  export const phone = (state, action) => {
    switch(action.type) {
      case "SET_PHONE":
        return action.value;
        
      case "PATCH_PHONE":
        return {
          ...state,
          ...action.value
        };
        
    case "SET_PHONE_PIXEL":
    case "PATCH_PHONE_PIXEL":
        
      return {
          ...state,
          pixels: pixels(state.pixels, action)
        };
        
    case "SET_PHONE_VIEWPORT":
    case "PATCH_PHONE_VIEWPORT":
        
      return {
          ...state,
          viewport: viewport(state.viewport, action)
        };
        
      default:
        return state;
    }
  }
  
  export const phones = (state, action) => {
    let newState;
    
    switch(action.type) {
      case "SET_PHONES":
        return action.value;
        
      
    case "SET_PHONE_PIXEL":
    case "PATCH_PHONE_PIXEL":
        
    case "SET_PHONE_VIEWPORT":
    case "PATCH_PHONE_VIEWPORT":
        
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
  }
  
  export const setPhones = (value) => ({type: "SET_PHONES", value});
  export const setPhone = (phoneId, value) => ({type: "SET_PHONE", phoneId, value})
  export const patchPhone = (phoneId, value) => ({type: "PATCH_PHONE", phoneId, value})
  export const deletePhone = (phoneId, value) => ({type: "DELETE_PHONE", phoneId, value})
  
  export const pixels = (state, action) => {
    switch(action.type) {
      case "SET_PHONE_PIXELS":
        return action.value;
        
      case "PATCH_PHONE_PIXELS":
        return {
          ...state,
          ...action.value
        };
        
      default:
        return state;
    }
  }
  
  export const setPixels = (phoneId, value) => ({type: "SET_PHONE_PIXELS", phoneId, value});
  export const patchPixels = (phoneId, value) => ({type: "PATCH_PHONE_PIXELS", phoneId, value})
  
  export const viewport = (state, action) => {
    switch(action.type) {
      case "SET_PHONE_VIEWPORT":
        return action.value;
        
      case "PATCH_PHONE_VIEWPORT":
        return {
          ...state,
          ...action.value
        };
        
      default:
        return state;
    }
  }
  
  export const setViewport = (phoneId, value) => ({type: "SET_PHONE_VIEWPORT", phoneId, value});
  export const patchViewport = (phoneId, value) => ({type: "PATCH_PHONE_VIEWPORT", phoneId, value})
  
  
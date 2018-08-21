import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDTqLepH7Ca4DHN_d_DoLWmWjZ6PglTU5s",
    authDomain: "rn-editor.firebaseapp.com",
    databaseURL: "https://rn-editor.firebaseio.com",
    projectId: "rn-editor",
    storageBucket: "rn-editor.appspot.com",
    messagingSenderId: "213155036568"
};

const mainApp = firebase.initializeApp(config);

let bucketId, componentId, elementId, resolutionId;

export const setBucketId = _bucketId => {
    bucketId = _bucketId;
};

export const setComponentId = _componentId => {
    componentId = _componentId;
};

export const setElementId = _elementId => {
    elementId = _elementId;
};

export const setResolutionId = _resolutionId => {
    resolutionId = _resolutionId;
};

const editorStateRef = () => mainApp.database().ref("editorState");
const bucketsRef = () => mainApp.database().ref("buckets");
const bucketRef = (bucketId) => bucketsRef().child(`${bucketId}`);
const componentsRef = (bucketId) => bucketsRef().child(`${bucketId}/components`);
const componentRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}`);
const viewOptionsRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions`);
const simulateTitlebarRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions/simulateTitlebar`);
const simulateTabRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions/simulateTab`);
const simulateListRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions/simulateList`);
const elementsRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements`);
const elementRef = (bucketId, componentId, elementId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}`);
const resolutionsRef = (bucketId, componentId, elementId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/resolutions`);
const resolutionRef = (bucketId, componentId, elementId, resolutionId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/resolutions/${resolutionId}`);
const propertiesRef = (bucketId, componentId, elementId, resolutionId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/resolutions/${resolutionId}/properties`);
const dataRef = (bucketId, componentId, elementId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/data`);
const phoneResolutionsRef = () => mainApp.database().ref("phoneResolutions");
const phoneResolutionRef = (phoneResolutionId) => phoneResolutionsRef().child(`${phoneResolutionId}`);
const pixelsRef = (phoneResolutionId) => phoneResolutionsRef().child(`${phoneResolutionId}/pixels`);
const viewportRef = (phoneResolutionId) => phoneResolutionsRef().child(`${phoneResolutionId}/viewport`);
const phonesRef = () => mainApp.database().ref("phones");
const phoneRef = (phoneId) => phonesRef().child(`${phoneId}`);

const getRef = ref => {
    return new Promise(resolve => {
        ref.once("value", function(snapshot) {
            resolve(snapshot.val());
        });
    });
};

const patchRef = (ref, data) => {
    return ref.update(data);
};

export const addToRef = (ref, data = {}) => {
    data.id = ref.key;
    ref.set(data);
    return ref.key;
};

export const getBucket = () => {
    return getRef(bucketRef(bucketId));
};

export const getPhones = () => {
    return getRef(phonesRef());
};

export const getResolutions = () => {
    return getRef(phoneResolutionsRef());
};

export const patchProperties = data => {
    return patchRef(
        propertiesRef(bucketId, componentId, elementId, resolutionId),
        data
    );
};

export const patchElement = data => {
    return patchRef(elementRef(bucketId, componentId, elementId), data);
};

export const patchComponent = data => {
    return patchRef(componentRef(bucketId, componentId), data);
};

export const addElement = data => {
    const ref = elementsRef(bucketId, componentId).push();
    return addToRef(ref);
};

export const addComponent = data => {
    const ref = componentsRef(bucketId).push();
    return addToRef(ref);
};

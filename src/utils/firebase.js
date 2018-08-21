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
const simulateTitlebarRef = () => editorStateRef().child(`simulateTitlebar`);
const simulateTabRef = () => editorStateRef().child(`simulateTab`);
const simulateListRef = () => editorStateRef().child(`simulateList`);
const bucketsRef = () => mainApp.database().ref("buckets");
const bucketRef = bucketId => bucketsRef().child(`${bucketId}`);
const componentsRef = bucketId => bucketsRef().child(`${bucketId}/components`);
const componentRef = (bucketId, componentId) =>
  bucketsRef().child(`${bucketId}/components/${componentId}`);
const elementsRef = (bucketId, componentId) =>
  bucketsRef().child(`${bucketId}/components/${componentId}/elements`);
const elementRef = (bucketId, componentId, elementId) =>
  bucketsRef().child(
    `${bucketId}/components/${componentId}/elements/${elementId}`
  );
const resolutionsRef = (bucketId, componentId, elementId) =>
  bucketsRef().child(
    `${bucketId}/components/${componentId}/elements/${elementId}/resolutions`
  );
const resolutionRef = (bucketId, componentId, elementId, resolutionId) =>
  bucketsRef().child(
    `${bucketId}/components/${componentId}/elements/${elementId}/resolutions/${resolutionId}`
  );
const viewportRef = (bucketId, componentId, elementId, resolutionId) =>
  bucketsRef().child(
    `${bucketId}/components/${componentId}/elements/${elementId}/resolutions/${resolutionId}/viewport`
  );
const propertiesRef = (bucketId, componentId, elementId, resolutionId) =>
  bucketsRef().child(
    `${bucketId}/components/${componentId}/elements/${elementId}/resolutions/${resolutionId}/properties`
  );

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

const child = () => {

}

const ref = (path) => {
    once: (_, callback) => {
        const data = localStorage.getItem(path);
        callback(data);
    },
    update:(data) => {
        localStorage.setItem(path, data);
        return Promise.resolve(true);
    },
    ref: (_path) => ref(path + "/" + _path)
    child: (_path) => ref(path + "/" + _path)
}

const database = () => {
    return ref("/");
}


const root = {
    child,
    ref,
    database
}

export const initialApp = () => root;


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

const editorStateRef = () => mainApp.database().ref("editorState"); // prettier-ignore
const bucketsRef = () => mainApp.database().ref("buckets"); // prettier-ignore
const bucketRef = (bucketId) => bucketsRef().child(`${bucketId}`); // prettier-ignore
const componentsRef = (bucketId) => bucketsRef().child(`${bucketId}/components`); // prettier-ignore
const componentRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}`); // prettier-ignore
const viewOptionsRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions`); // prettier-ignore
const simulateTitlebarRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions/simulateTitlebar`); // prettier-ignore
const simulateTabRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions/simulateTab`); // prettier-ignore
const simulateListRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/viewOptions/simulateList`); // prettier-ignore
const elementsRef = (bucketId, componentId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements`); // prettier-ignore
const elementRef = (bucketId, componentId, elementId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}`); // prettier-ignore
const resolutionsRef = (bucketId, componentId, elementId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/resolutions`); // prettier-ignore
const resolutionRef = (bucketId, componentId, elementId, resolutionId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/resolutions/${resolutionId}`); // prettier-ignore
const propertiesRef = (bucketId, componentId, elementId, resolutionId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/resolutions/${resolutionId}/properties`); // prettier-ignore
const dataRef = (bucketId, componentId, elementId) => bucketsRef().child(`${bucketId}/components/${componentId}/elements/${elementId}/data`); // prettier-ignore
const phoneResolutionsRef = () => mainApp.database().ref("phoneResolutions"); // prettier-ignore
const phoneResolutionRef = (phoneResolutionId) => phoneResolutionsRef().child(`${phoneResolutionId}`); // prettier-ignore
const pixelsRef = (phoneResolutionId) => phoneResolutionsRef().child(`${phoneResolutionId}/pixels`); // prettier-ignore
const viewportRef = (phoneResolutionId) => phoneResolutionsRef().child(`${phoneResolutionId}/viewport`); // prettier-ignore
const phonesRef = () => mainApp.database().ref("phones"); // prettier-ignore
const phoneRef = (phoneId) => phonesRef().child(`${phoneId}`); // prettier-ignore

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

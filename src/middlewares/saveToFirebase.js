import * as api from "../utils/firebase";

const log = store => next => action => {
    let result = next(action);

    switch (action.type) {
        case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
            return api.patchProperties(action.value);
        default:
            break;
    }

    return result;
};

export default log;

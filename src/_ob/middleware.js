import { modes, eventTypes } from "./recordState";
import * as actions from "./recordState";
import * as selectors from "./selectors";
import * as dom from "./dom";

const includeActions = [
    "PATCH_EDITORSTATE",
    "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES"
];

const log = store => next => action => {
    let result = next(action);

    const state = store.getState(),
        mode = selectors.modeSelector(state);

    if (includeActions.indexOf(action.type) >= 0 && mode === modes.RECORDING) {
        setTimeout(() => {
            store.dispatch(actions.newEvent({ type: action.type, action }));
        }, 0);
    }

    return result;
};

export default log;

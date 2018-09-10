import { modes, eventTypes } from "./recordState";
import * as actions from "./recordState";
import * as selectors from "./selectors";
import * as dom from "./dom";

const includeActions = ["PATCH_EDITORSTATE"];

const log = store => next => action => {
    let result = next(action);

    const state = store.getState(),
        mode = selectors.modeSelector(state);

    if (includeActions.indexOf(action.type) >= 0 && mode !== modes.PLAYING) {
        if (action.type === "PATCH_EDITORSTATE") {
            const { value } = action,
                { hoverBox } = value || {};
        }

        setTimeout(() => {
            store.dispatch(actions.newEvent({ type: action.type, action }));
        }, 0);
    }

    return result;
};

export default log;

/*
     if (hoverBox && hoverBox.top) {
                const middle = dom.middle(hoverBox);

                store.dispatch(
                    actions.newEvent({
                        obId: "element",
                        type: eventTypes.HOVER,
                        cursor: middle
                    })
                );
            }
            */

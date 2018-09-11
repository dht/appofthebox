import * as selectors from "./selectors";
import * as initialValues from "./initialValues";
import * as pointer from "./pointer";
import * as storage from "./storage";
import * as dom from "./dom";

export const eventTypes = {
    START: "START",
    CLICK: "CLICK",
    TYPE: "TYPE",
    ENTER: "ENTER",
    STOP: "STOP"
};

export const modes = {
    IDLE: "IDLE",
    RECORDING: "RECORDING",
    STOPPED: "STOPPED",
    PLAYING: "PLAYING"
};

const initialState = {
    currentEventId: 0,
    currentEventDuration: {},
    mode: modes.IDLE,
    nextId: 1,
    timeline: storage.getJSON("timeline"),
    cursor: {
        left: 10,
        top: 10
    }
};

const actionTypes = {
    ADD_EVENT: "ADD_EVENT",
    SET_TIMELINE: "SET_TIMELINE",
    SET_CURRENT_EVENT_ID: "SET_CURRENT_EVENT_ID",
    SET_CURRENT_EVENT_DURATION: "SET_CURRENT_EVENT_DURATION",
    SET_CURSOR: "SET_CURSOR",
    SET_MODE: "SET_MODE",
    SET_NEXT_ID: "SET_NEXT_ID"
};

export const event = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_EVENT:
            return action.value;

        default:
            return state;
    }
};

export const timeline = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EVENT:
            return {
                ...state,
                [action.id]: event(state[action.id], action)
            };

        default:
            return state;
    }
};

export const recordState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TIMELINE:
            return {
                ...state,
                timeline: action.value
            };

        case actionTypes.SET_CURRENT_EVENT_ID:
            return {
                ...state,
                currentEventId: action.value
            };

        case actionTypes.SET_CURSOR:
            return {
                ...state,
                cursor: action.value
            };

        case actionTypes.SET_MODE:
            return {
                ...state,
                mode: action.value
            };

        case actionTypes.SET_NEXT_ID:
            return {
                ...state,
                nextId: action.value
            };

        case actionTypes.SET_CURRENT_EVENT_DURATION:
            return {
                ...state,
                currentEventDuration: action.value
            };

        case actionTypes.ADD_EVENT:
            return {
                ...state,
                timeline: timeline(state.timeline, action)
            };

        default:
            return state;
    }
};

export const addEvent = (id, value) => {
    return {
        type: actionTypes.ADD_EVENT,
        id,
        value
    };
};

export const setTimeline = value => {
    return {
        type: actionTypes.SET_TIMELINE,

        value
    };
};

export const setCurrentEventId = value => {
    return {
        type: actionTypes.SET_CURRENT_EVENT_ID,
        value
    };
};

export const setCurrentEventDuration = value => {
    return {
        type: actionTypes.SET_CURRENT_EVENT_DURATION,
        value
    };
};

export const setCursor = value => {
    return {
        type: actionTypes.SET_CURSOR,
        value
    };
};

export const setMode = value => {
    return {
        type: actionTypes.SET_MODE,
        value
    };
};

export const setNextId = value => {
    return {
        type: actionTypes.SET_NEXT_ID,
        value
    };
};

export const nudgeId = () => {
    return (dispatch, getState) => {
        const nextId = selectors.nextIdSelector(getState());

        dispatch(setNextId(nextId + 1));
    };
};

export const newEvent = value => {
    return (dispatch, getState) => {
        const state = getState(),
            mode = selectors.modeSelector(state);

        if (mode !== modes.RECORDING) return;

        const nextId = selectors.nextIdSelector(getState());

        dispatch(addEvent(nextId, { id: nextId, ts: timestamp(), ...value }));
        dispatch(nudgeId());
    };
};

export const setCurrentEvent = value => {
    return (dispatch, getState) => {
        const { id, duration } = value || {};
        dispatch(setCurrentEventId(id || 0));
        dispatch(setCurrentEventDuration(duration || {}));
    };
};

export const play = value => {
    return async (dispatch, getState) => {
        const state = getState(),
            timeline = selectors.timelinePlaySelector(state),
            mode = selectors.modeSelector(state);

        if (mode === modes.PLAYING) return;

        dispatch(setMode(modes.PLAYING));
        dispatch(setCurrentEvent(null));

        for (let key in timeline) {
            console.log("key ->", key);

            const event = timeline[key],
                { type, cursor, action, duration, input } = event;

            dispatch(setCurrentEvent(event));

            switch (type) {
                case "CLICK":
                    await timeout(duration.rest);
                    dispatch(
                        setCursor({ ...cursor, duration: duration.cursor })
                    );
                    await timeout(duration.cursor);
                    break;

                case "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES":
                    console.log("duration ->", duration);

                    const el = document.querySelector(input.selector);

                    const delay = await dom.type(el, input.value);

                    await timeout(duration.total - delay);

                    await dom.blur(el, 10);
                    dispatch(action);

                    break;

                default:
                    if (action) {
                        await timeout(duration.total);
                        dispatch(action);
                    }
                    break;
            }
        }

        dispatch(setMode(modes.STOPPED));
        dispatch(setCurrentEvent(null));
    };
};

export const stop = value => {
    return (dispatch, getState) => {
        dispatch(setMode(modes.STOPPED));
        dispatch(newEvent({ type: eventTypes.STOP }));
    };
};

export const record = value => {
    return (dispatch, getState) => {
        dispatch(setMode(modes.RECORDING));
        dispatch(setCurrentEventId(0));
        dispatch(newEvent({ type: eventTypes.START }));
    };
};

const timestamp = () => new Date().getTime();

export const save = value => {
    return (dispatch, getState) => {
        const state = getState(),
            timeline = selectors.timelineSelector(state);

        storage.saveJSON("timeline", timeline);
    };
};

export const load = value => {
    return (dispatch, getState) => {
        const timeline = storage.getJSON("timeline");

        dispatch(setTimeline(timeline));
    };
};

export const clear = value => {
    return (dispatch, getState) => {
        storage.saveJSON("timeline", {});
        dispatch(setTimeline({}));
    };
};

const timeout = mils => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, Math.max(mils, 0));
    });
};

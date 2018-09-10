import * as selectors from "./selectors";
import * as initialValues from "./initialValues";

export const eventTypes = {
    START: "START",
    CLICK: "CLICK",
    HOVER: "HOVER",
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
    mode: modes.IDLE,
    nextId: 1, 
    timeline: {}, //initialValues.timeline,
    cursor: {
        left: 10,
        top: 10
    }
};

const actionTypes = {
    ADD_EVENT: "ADD_EVENT",
    SET_CURRENT_EVENT_ID: "SET_CURRENT_EVENT_ID",
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

export const setCurrentEventId = value => {
    return {
        type: actionTypes.SET_CURRENT_EVENT_ID,
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
        const nextId = selectors.nextIdSelector(getState());

        dispatch(addEvent(nextId, { id: nextId, ts: timestamp(), ...value }));
        dispatch(nudgeId());
    };
};

export const play = value => {
    return async (dispatch, getState) => {
        const state = getState(),
            { recordState } = state,
            { timeline } = recordState;

        dispatch(setMode(modes.PLAYING));
        dispatch(setCurrentEventId(0));
        dispatch(setCursor({ top: 100, left: 500 }));

        let lastTs = 0;

        for (let key in timeline) {
            console.log("key ->", key);

            dispatch(setCurrentEventId(key));

            const event = timeline[key],
                { type, cursor, action, ts } = event;

            const delta = Math.max(lastTs === 0 ? 0 : ts - lastTs, 200);

            console.log("delta ->", delta, ts - lastTs, ts, lastTs);
            console.log("action, type ->", action, type, ts);

            switch (type) {
                case "CLICK":
                case "HOVER":
                    dispatch(setCursor({ ...cursor, duration: delta }));
                    await delay(delta);
                    break;

                default:
                    if (action) {
                        await delay(500);
                        dispatch(action);
                    }
                    break;
            }

            lastTs = ts;
        }
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
const delay = mils => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, mils);
    });
};

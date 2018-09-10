import { createSelector } from "reselect";
import { methodsToGlobal } from "../utils/code";
import { arrayToObject, objectToArray } from "../utils/map";
import { crunchResolutions } from "../utils/style";
import clone from "clone";
import { PropertiesArray } from "../constants/allProperties";
import moment from "moment";

export const recordStateSelector = state => state.recordState || {};

export const nextIdSelector = createSelector(
    recordStateSelector,
    recordState => recordState.nextId
);

export const modeSelector = createSelector(
    recordStateSelector,
    recordState => recordState.mode
);

export const timelineSelector = createSelector(
    recordStateSelector,
    recordState => recordState.timeline || {}
);

export const cursorSelector = createSelector(
    recordStateSelector,
    recordState => recordState.cursor || {}
);

export const currentEventIdSelector = createSelector(
    recordStateSelector,
    recordState => recordState.currentEventId
);

export const currentEventSelector = createSelector(
    timelineSelector,
    currentEventIdSelector,
    (timeline, currentEventId) => timeline[currentEventId]
);

export const eventSelector = createSelector(
    timelineSelector,
    currentEventIdSelector,
    (timeline, currentEventId) => {
        const keys = Object.keys(timeline),
            firstKey = keys[0];

        let ts = 0;

        if (firstKey) {
            ts = timeline[firstKey].ts;
        }

        let time = moment();

        return keys
            .map((key, index) => {
                const event = timeline[key],
                    delta = event.ts - ts;

                time.minutes(0);
                time.hours(0);
                time.seconds(0);
                time.milliseconds(delta);
                const timeStr = time.format("mm:ss");

                return {
                    ...event,
                    index,
                    timeStr,
                    isCurrent: currentEventId === event.id,
                    ts: delta
                };
            })
            .reverse();
    }
);

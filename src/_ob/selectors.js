import { createSelector } from "reselect";
import { methodsToGlobal } from "../utils/code";
import { arrayToObject, objectToArray } from "../utils/map";
import { crunchResolutions } from "../utils/style";
import clone from "clone";
import { PropertiesArray } from "../constants/allProperties";
import moment from "moment";
import * as pointer from "./pointer";
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

export const currentEventDurationSelector = createSelector(
    recordStateSelector,
    recordState => recordState.currentEventDuration
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

        console.log("currentEventId ->", currentEventId);

        return keys.map((key, index) => {
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
                isAction: event.action && event.action.type,
                isCurrent: currentEventId == event.id,
                ts: delta
            };
        });
    }
);

export const timelinePlaySelector = createSelector(
    timelineSelector,
    cursorSelector,
    (timeline, lastCursor) => {
        const keys = Object.keys(timeline);

        let lastTs = 0;

        return keys.map(key => {
            const event = timeline[key],
                { cursor, ts, action } = event,
                { type, value } = action || {};

            let cursorDuration = 0,
                input = {};

            let eventDuration = lastTs === 0 ? 0 : ts - lastTs;

            if (cursor) {
                cursorDuration = pointer.duration(lastCursor, cursor);
                eventDuration = Math.max(eventDuration, cursorDuration);
                lastCursor = cursor;
            }

            if (
                type === "PATCH_BUCKET_COMPONENT_ELEMENT_RESOLUTION_PROPERTIES"
            ) {
                const firstKey = Object.keys(value)[0];

                input = {
                    key: firstKey,
                    selector: `[data-id='${firstKey}']`,
                    value: value[firstKey]
                };
            }

            lastTs = ts;

            return {
                ...event,
                duration: {
                    rest: eventDuration - cursorDuration,
                    cursor: cursorDuration,
                    total: eventDuration
                },
                input
            };
        });
    }
);

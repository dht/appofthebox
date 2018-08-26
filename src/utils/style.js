import ElementTypes from "../constants/elementTypes";
import { objectToArray } from "../utils/map";

export const crunchResolutions = (resolutions = [], resolutionId) => {

    return objectToArray(resolutions)
        .filter(r => r)
        .reduce((output, resolution) => {
            const { id, properties } = resolution;

            console.log('properties ->', properties);

            if (resolutionId >= id) {
                output = { ...output, ...properties };
            }

            return output;
        }, {});
};

const pixelate = (value = "") => {
    if (String(value).indexOf(" ") >= 0) {
        return value.split(" ").map(i => i + "px").join(" ");
    }

    return  value + "px";
}

const parseCss = (css, value) => {
    switch (css) {
        case "fontSize":
        case "margin":
        case "padding":
        case "width":
        case "height":
            return pixelate(value);
        default:
            return value;
    }
};
export const parseStyle = (style, typ) => {
    const parsedStyle = Object.keys(style).reduce((output, key) => {
        output[key] = parseCss(key, style[key]);
        return output;
    }, {});

    return { ...styles[typ], ...parsedStyle };
};

const styles = {
    [ElementTypes.VIEW_HORIZONTAL]: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid green"
    },
    [ElementTypes.VIEW_VERTICAL]: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid green"
    },
    [ElementTypes.TEXT]: {
        border: "1px solid green"
    },
    [ElementTypes.IMAGE]: {
        border: "1px solid green"
    },
    [ElementTypes.BUTTON]: {
        display: "flex",
        flexDirection: "row",
        border: "1px solid green"
    },
    [ElementTypes.ICON]: {
        border: "1px solid green"
    },
    [ElementTypes.PLACEHOLDER]: {
        border: "1px solid green"
    },
    [ElementTypes.SNIPPET]: {
        border: "1px solid green"
    }
};

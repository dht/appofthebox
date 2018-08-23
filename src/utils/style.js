import ElementTypes from "../components/Element/ElementTypes";

export const crunchResolutions = (resolutions, resolutionId) => {
    return resolutions.filter(r => r).reduce((output, resolution) => {
        const { id, properties } = resolution;

        if (resolutionId <= id) {
            output = { ...output, ...properties };
        }

        return output;
    }, {});
};

export const parseStyle = (style, typ) => {
    const parsedStyle = Object.keys(style).reduce((output, key) => {
        output[key] = style[key];
        return output;
    }, {})

    return {...styles[typ], ...parsedStyle};
};

const styles = {
    [ElementTypes.VIEW_HORIZONTAL]: {
        display: "flex",
        flexDirection:"row",
        border:"1px solid green",
    },
    [ElementTypes.VIEW_VERTICAL]: {
        display: "flex",
        flexDirection:"column",
        border:"1px solid green",
    },
    [ElementTypes.TEXT]: {
        border:"1px solid green",
    },
    [ElementTypes.IMAGE]: {
        border:"1px solid green",
    },
    [ElementTypes.BUTTON]: {
        display: "flex",
        flexDirection:"row",
        border:"1px solid green",
    },
    [ElementTypes.ICON]: {
        border:"1px solid green",
    },
    [ElementTypes.PLACEHOLDER]: {
        border:"1px solid green",
    },
    [ElementTypes.SNIPPET]: {
        border:"1px solid green",
    }
};

import { arrayInPathToObject } from "../utils/map";

export const parseBucket = bucket => {
    let output;
    output = arrayInPathToObject(bucket, "components.*.elements.*.resolutions");
    return output;
};

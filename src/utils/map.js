export const arrayToObject = (arr = []) =>
    arr.reduce((output, item) => {
        output[item.id] = item;
        return output;
    }, {});

export const objectToArray = obj => {
    if (!obj) return [];
    if (Array.isArray(obj)) return obj;
    return Object.keys(obj).map(key => obj[key]);
};

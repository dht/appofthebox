export const arrayToObject = (arr = []) =>
    arr.reduce((output, item) => {
        output[item.id] = item;
        return output;
    }, {});

export const objectToArray = (obj = {}) =>
    Object.keys(obj).map(key => obj[key]);

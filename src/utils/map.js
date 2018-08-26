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

const mapObject = (obj, callback) => {
    return Object.keys(obj).reduce((output, key) => {
        output[key] = callback(obj[key], key);
        return output;
    }, {});
};

const _deep = (items, key, _path, lastKey, callback) => {
    if (_path.length === 0 && key === lastKey) {
        return callback(items);
    }

    return mapObject(items, (item, key) => {
        const ok =
            typeof item === "object" && (key === _path[0] || _path[0] === "*");
        if (ok) {
            return _deep(items[key], key, _path.slice(1), lastKey, callback);
        } else {
            return item;
        }
    });
};

const mapByPathObject = (obj, path, callback) => {
    const lastKey = path.split(".").pop();
    return _deep(obj, "", path.split("."), lastKey, callback);
};

export const arrayInPathToObject = (obj, path) => {
    const callback = (item = []) => {
        return item.filter(i => i).reduce((output, item, index) => {
            output[index + 1] = item;
            return output;
        }, {});
      }

    return mapByPathObject(obj, path, callback);
};
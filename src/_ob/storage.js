import * as indexDB from "./indexDB";

export const saveString = (key, value) => {
    localStorage.setItem(key, value);
};

export const getString = key => {
    return localStorage.getItem(key);
};

export const saveJSON = (key, value) => {
    saveString(key, JSON.stringify(value));
};

export const getJSON = key => {
    try {
        return JSON.parse(getString(key));
    } catch (e) {
        return {};
    }
};

export const saveBlob = (key, blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function() {
        const base64data = reader.result;
        indexDB.saveAudio(key, base64data);
    };
};

export const getBlob = async key => {
    const blob = await indexDB.getAudio(key);

    return fetch(blob.blob)
        .then(res => res.blob())
        .then(blob => {
            return new Blob([blob], { type: "audio/webm;codecs=opus" });
        });
};

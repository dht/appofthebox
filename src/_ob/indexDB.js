// This works on all devices/browsers, and uses IndexedDBShim as a final fallback
const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const open = () => {
    return new Promise(resolve => {
        const open = indexedDB.open("ob2030", 1);

        // Create the schema
        open.onupgradeneeded = function() {
            const db = open.result;
            const store = db.createObjectStore("MainStore", { keyPath: "id" });
            console.log("onupgradeneeded ->", true);
        };

        open.onsuccess = function() {
            console.log("onsuccess ->", true);
            resolve(open.result);
        };
    });
};
const transaction = callback => {
    return new Promise(async (resolve, reject) => {
        const db = await open();
        const tx = db.transaction("MainStore", "readwrite");
        const store = tx.objectStore("MainStore");

        resolve(store);

        // Close the db when the transaction is done
        tx.oncomplete = function() {
            console.log("transaction.oncomplete ->", true);
            db.close();
        };

        tx.onerror = function(event) {
            console.log("transaction.error ->", transaction.error);
            reject(transaction.error);
        };
    });
};

const get = (store, id) => {
    return new Promise(resolve => {
        const get = store.get(id);

        get.onsuccess = function() {
            resolve(get.result);
        };
    });
};

export const saveAudio = (id, blob) => {
    return transaction().then(store => {
        store.put({ id: id, filename: "audio1", blob: blob });
    });
};

export const getAudio = async id => {
    const store = await transaction();
    const result = await get(store, id);

    console.log("result ->", result);

    return result;
};

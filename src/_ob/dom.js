export const findObElement = el => {
    if (!el || !el.getAttribute) return null;

    const attr = el.getAttribute("data-ob");

    return attr || findObElement(el.parentNode);
};

const inBox = (box, x, y) => {
    return (
        x >= box.left &&
        x <= box.left + box.width &&
        y >= box.top &&
        y <= box.top + box.height
    );
};

const classExist = (el, className) => {
    return el.className.indexOf(className + " ") >= 0;
};

const addClass = (el, className) => {
    return el.classList.add(className);
};

export const addClassIfInBox = (el, box, x, y, className) => {
    const isInBox = inBox(box, x, y),
        isClassThere = el.classList.contains(className);

    if (isInBox && !isClassThere) {
        el.classList.add(className);
    }

    if (!isInBox && isClassThere) {
        el.classList.remove(className);
    }
};

export const middle = box => {
    return {
        top: box.top + Math.ceil(box.height / 2),
        left: box.left + Math.ceil(box.width / 2)
    };
};

export const addEventListener = (selector, eventName, method) => {
    setTimeout(() => {
        const elements = Array.prototype.slice.call(
            document.querySelectorAll(selector)
        );

        console.log("elements ->", selector, elements);

        if (!elements || elements.length === 0) return;

        elements.forEach(el => {
            el.addEventListener(eventName, method);
        });
    }, 0);
};

export const removeEventListener = (selector, eventName, method) => {
    const elements = Array.prototype.slice.call(
        document.querySelectorAll(selector)
    );

    if (!elements || elements.length === 0) return;

    elements.forEach(el => el.removeEventListener(eventName, method));
};

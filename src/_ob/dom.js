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

export const type = async (el, value) => {
    if (!el) return;

    const str = String(value || "");

    let delay = 0;

    await focus(el, 100);
    await select(el, 100);
    delay += 200;

    for (let i of nachman(str)) {
        await setInputValue(el, i, 200);
        delay += 200;
    }

    return delay;
};

const inputEvent = async (el, event, mils) => {
    await timeout(mils);

    switch (event) {
        case "focus":
            return el.focus();
        case "blur":
            return el.blur();
        case "select":
            return el.select();
        default:
            break;
    }
};

const nachman = str => {
    return str.split("").reduce((output, key) => {
        const last = output[output.length - 1] || "";
        output.push(last + key);
        return output;
    }, []);
};

export const blur = (el, delay) => inputEvent(el, "blur", delay);
export const focus = (el, delay) => inputEvent(el, "focus", delay);
export const select = (el, delay) => inputEvent(el, "select", delay);

const setInputValue = async (el, value, delay) => {
    await timeout(delay);

    if (el) {
        el.value = value;
    }
};

const timeout = mils => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, mils);
    });
};

const MIN_DURATION = 600;

export const duration = (from, to) => {
    const deltaX = (to.left || 0) - from.left;
    const deltaY = (to.top || 0) - from.top;
    const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    return Math.max(distance * 2.5, MIN_DURATION);
};
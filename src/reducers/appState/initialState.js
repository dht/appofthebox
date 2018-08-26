//import {initialStateEditor, initialStateBucket} from "./initialState";

export const initialStateEditor = {
    isLoading: false,
    hideAround: false,
    currentBucketId: "",
    currentComponentId: 1,
    currentElementId: 1,
    currentHoverId: 1,
    currentResolutionId: 1,
    currentPhoneId: 1
};

export const initialPhoneResolutions = {
    1: {
        id: 1,
        name: "320 x 568",
        pixels: { x: 640, y: 1336 },
        viewport: { x: 320, y: 568 },
        examplePhoneId: 8
    }
};

export const initialPhones = {
    8: {
        id: 8,
        name: "iPhone 5",
        imageName: "iphone5.png",
        resolutionId: 1
    }
};

export const initialStateBucket = {
    id: 1,
    colors: "{}",
    theme: "{}",
    datasets: "{}",
    components: {
        button: {
            id: "button",
            name: "Button",
            viewOptions: {
                simulateTitlebar: {
                    on: true
                },
                simulateTab: {
                    on: true
                },
                simulateList: {
                    on: true,
                    component: "list",
                    datasetId: "",
                    locale: "en"
                }
            },
            elements: {
                1: {
                    parentId: 0,
                    id: 1,
                    type: "VIEW_HORIZONTAL",
                    resolutions: {
                        1: {
                            id: 1,
                            properties: {
                                backgroundColor: "green",
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "stretch"
                            }
                        }
                    },
                    data: {
                        _value: "hi"
                    }
                },
                2: {
                    parentId: 1,
                    id: 2,
                    type: "TEXT",
                    resolutions: {
                        1: {
                            id: 1,
                            properties: {
                                fontSize: 14,
                                color: "yellow",
                                flex: 1
                            }
                        }
                    },
                    data: {
                        _value: "welcome"
                    }
                },
                3: {
                    parentId: 1,
                    id: 3,
                    type: "TEXT",
                    resolutions: {
                        1: {
                            id: 1,
                            properties: {
                                fontSize: 14,
                                color: "pink",
                                flex: 1
                            }
                        }
                    },
                    data: {
                        _value: "here"
                    }
                }
            }
        }
    }
};

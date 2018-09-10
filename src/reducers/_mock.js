export const bucket = {
    colors: "{}",
    components: {
        button: {
            elements: {
                "1": {
                    data: { _value: "hi" },
                    id: 1,
                    parentId: 0,
                    resolutions: [
                        null,
                        {
                            id: 1,
                            properties: {
                                alignItems: "center",
                                backgroundColor: "green",
                                color: "cyan",
                                flex: 1,
                                justifyContent: "stretch"
                            }
                        }
                    ],
                    type: "VIEW_HORIZONTAL"
                },
                "2": {
                    data: { _value: "welcome" },
                    id: 2,
                    parentId: 1,
                    resolutions: [
                        null,
                        {
                            id: 1,
                            properties: {
                                backgroundColor: "#ffff00",
                                border: "3px solid white",
                                color: "#333333",
                                flex: 1,
                                fontSize: "20",
                                margin: "10",
                                padding: "20"
                            }
                        },
                        {
                            properties: {
                                backgroundColor: "#333333",
                                fontSize: "40"
                            }
                        },
                        { properties: { fontSize: "30", margin: "30" } },
                        { properties: { color: "#333333", fontSize: "70" } },
                        { properties: { fontSize: "70" } }
                    ],
                    type: "TEXT"
                },
                "3": {
                    data: { _value: "here" },
                    id: 3,
                    parentId: 1,
                    resolutions: {
                        "1": {
                            id: 1,
                            properties: {
                                color: "#f595cc",
                                flex: 1,
                                fontSize: "22",
                                margin: "20 20 10 10",
                                padding: "10 30 40 50"
                            }
                        },
                        "4": { properties: { fontSize: "20" } }
                    },
                    type: "TEXT"
                },
                undefined: {
                    resolutions: [
                        null,
                        {
                            properties: {
                                backgroundColor: "white",
                                color: "#eeeeee"
                            }
                        }
                    ]
                }
            },
            id: "button",
            name: "Button",
            viewOptions: {
                simulateList: {
                    component: "list",
                    datasetId: "",
                    locale: "en",
                    on: true
                },
                simulateTab: { on: true },
                simulateTitlebar: { on: true }
            }
        }
    },
    datasets: "{}",
    id: "804acb84",
    theme: "{}"
};

export const resolutions = {
    "1": {
        examplePhoneId: 8,
        id: 1,
        name: "320 x 568",
        pixels: { x: 640, y: 1336 },
        viewport: { x: 320, y: 568 }
    },
    "2": {
        examplePhoneId: 22,
        id: 2,
        name: "360 x 640",
        pixels: { x: 1440, y: 2560 },
        popularity: 1,
        viewport: { x: 360, y: 640 }
    },
    "3": {
        examplePhoneId: 18,
        id: 3,
        name: "360 x 740",
        pixels: { x: 1440, y: 2960 },
        viewport: { x: 360, y: 740 }
    },
    "4": {
        examplePhoneId: 3,
        id: 4,
        name: "375 x 667",
        pixels: { x: 750, y: 1334 },
        popularity: 2,
        viewport: { x: 375, y: 667 }
    },
    "5": {
        examplePhoneId: 1,
        id: 5,
        name: "375 x 812",
        pixels: { x: 1125, y: 2436 },
        viewport: { x: 375, y: 812 }
    },
    "6": {
        examplePhoneId: 9,
        id: 6,
        name: "411 x 731",
        pixels: { x: 1440, y: 2560 },
        viewport: { x: 411, y: 731 }
    },
    "7": {
        examplePhoneId: 2,
        id: 7,
        name: "414 x 736",
        pixels: { x: 1080, y: 1920 },
        popularity: 3,
        viewport: { x: 414, y: 736 }
    },
    "8": {
        examplePhoneId: 15,
        id: 8,
        name: "480 x 853",
        pixels: { x: 1440, y: 2560 },
        viewport: { x: 480, y: 853 }
    },
    "9": {
        examplePhoneId: 24,
        id: 9,
        name: "1279 x 800 (Web)",
        pixels: { x: 1280, y: 800 },
        viewport: { x: 1280, y: 800 }
    }
};

export const phones = {
    "1": { id: 1, imageName: "iphonex.png", name: "iPhone X", resolutionId: 5 },
    "2": {
        id: 2,
        imageName: "iphone8plus.png",
        name: "iPhone 8 Plus",
        resolutionId: 7
    },
    "3": { id: 3, imageName: "iphone8.png", name: "iPhone 8", resolutionId: 4 },
    "4": {
        id: 4,
        imageName: "iphone7plus.png",
        name: "iPhone 7 Plus",
        resolutionId: 7
    },
    "5": { id: 5, imageName: "iphone7.png", name: "iPhone 7", resolutionId: 4 },
    "6": {
        id: 6,
        imageName: "iphone6plus.png",
        name: "iPhone 6 Plus",
        resolutionId: 7
    },
    "7": {
        id: 7,
        imageName: "iphone6.png",
        name: "iPhone 6/6S",
        resolutionId: 4
    },
    "8": { id: 8, imageName: "iphone5.png", name: "iPhone 5", resolutionId: 1 },
    "9": { id: 9, imageName: "nexus6p.png", name: "Nexus 6P", resolutionId: 6 },
    "10": {
        id: 10,
        imageName: "nexus5x.png",
        name: "Nexus 5X",
        resolutionId: 6
    },
    "11": {
        id: 11,
        imageName: "pixel.png",
        name: "Google Pixel",
        resolutionId: 6
    },
    "12": {
        id: 12,
        imageName: "pixelxl.png",
        name: "Google Pixel XL",
        resolutionId: 6
    },
    "13": {
        id: 13,
        imageName: "pixel2.png",
        name: "Google Pixel 2",
        resolutionId: 6
    },
    "14": {
        id: 14,
        imageName: "pixel2xl.png",
        name: "Google Pixel 2 XL",
        resolutionId: 6
    },
    "15": {
        id: 15,
        imageName: "note5.png",
        name: "Samsung Galaxy Note 5",
        resolutionId: 8
    },
    "16": { id: 16, imageName: "g5.png", name: "LG G5", resolutionId: 8 },
    "17": {
        id: 17,
        imageName: "plus3.png",
        name: "One Plus 3",
        resolutionId: 8
    },
    "18": {
        id: 18,
        imageName: "s9.png",
        name: "Samsung Galaxy S9",
        resolutionId: 3
    },
    "19": {
        id: 19,
        imageName: "s9plus.png",
        name: "Samsung Galaxy S9+",
        resolutionId: 3
    },
    "20": {
        id: 20,
        imageName: "s8.png",
        name: "Samsung Galaxy S8",
        resolutionId: 3
    },
    "21": {
        id: 21,
        imageName: "s8plus.png",
        name: "Samsung Galaxy S8+",
        resolutionId: 3
    },
    "22": {
        id: 22,
        imageName: "s7.png",
        name: "Samsung Galaxy S7",
        resolutionId: 2
    },
    "23": {
        id: 23,
        imageName: "s7edge.png",
        name: "Samsung Galaxy S7 Edge",
        resolutionId: 2
    },
    "24": { id: 24, imageName: "tab10.png", name: "Web", resolutionId: 9 }
};

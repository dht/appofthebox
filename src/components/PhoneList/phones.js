export const phones = {
  1: {
    id: 1,
    name: "iPhone X",
    pixels: { x: 1125, y: 2436 },
    viewport: { x: 375, y: 812 },
    imageName: "iphonex.png"
  },
  2: {
    id: 2,
    name: "iPhone 8 Plus",
    pixels: { x: 1080, y: 1920 },
    viewport: { x: 414, y: 736 },
    imageName: "iphone8plus.png"
  },
  3: {
    id: 3,
    name: "iPhone 8",
    pixels: { x: 750, y: 1334 },
    viewport: { x: 375, y: 667 },
    imageName: "iphone8.png"
  },
  4: {
    id: 4,
    name: "iPhone 7 Plus",
    pixels: { x: 1080, y: 1920 },
    viewport: { x: 414, y: 736 },
    imageName: "iphone7plus.png"
  },
  5: {
    id: 5,
    name: "iPhone 7",
    pixels: { x: 750, y: 1334 },
    viewport: { x: 375, y: 667 },
    imageName: "iphone7.png"
  },
  6: {
    id: 6,
    name: "iPhone 6 Plus",
    pixels: { x: 1080, y: 1920 },
    viewport: { x: 414, y: 736 },
    imageName: "iphone6plus.png"
  },
  7: {
    id: 7,
    name: "iPhone 6/6S",
    pixels: { x: 750, y: 1334 },
    viewport: { x: 375, y: 667 },
    imageName: "iphone6.png"
  },
  8: {
    id: 8,
    name: "iPhone 5",
    pixels: { x: 640, y: 1336 },
    viewport: { x: 320, y: 568 },
    imageName: "iphone5.png"
  },
  9: {
    id: 9,
    name: "Nexus 6P",
    pixels: { x: 1440, y: 2560 },
    viewport: { x: 411, y: 731 },
    imageName: "nexus6p.png"
  },
  10: {
    id: 10,
    name: "Nexus 5X",
    pixels: { x: 1080, y: 1920 },
    viewport: { x: 411, y: 731 },
    imageName: "nexus5x.png"
  },
  11: {
    id: 11,
    name: "Hoohle Pixel",
    pixels: { x: 1080, y: 1920 },
    viewport: { x: 411, y: 731 },
    imageName: "pixel.png"
  },
  12: {
    id: 12,
    name: "Google Pixel XL",
    pixels: { x: 1440, y: 2560 },
    viewport: { x: 411, y: 731 },
    imageName: "pixelxl.png"
  },
  13: {
    id: 13,
    name: "Google Pixel 2",
    pixels: { x: 1080, y: 1920 },
    viewport: { x: 411, y: 731 },
    imageName: "pixel2.png"
  },
  14: {
    id: 14,
    name: "Google Pixel 2 XL",
    pixels: { x: 1440, y: 2560 },
    viewport: { x: 411, y: 731 },
    imageName: "pixel2xl.png"
  },
  15: {
    id: 15,
    name: "Samsung Galaxy Note 5",
    pixels: { x: 1440, y: 2560 },
    viewport: { x: 480, y: 853 },
    imageName: "note5.png"
  },
  16: {
    id: 16,
    name: "LG G5",
    pixels: { x: 1440, y: 2560 },
    viewport: { x: 480, y: 853 },
    imageName: "g5.png"
  },
  17: {
    id: 17,
    name: "One Plus 3",
    pixels: { x: 1080, y: 1920 },
    viewport: { x: 480, y: 853 },
    imageName: "plus3.png"
  },
  18: {
    id: 18,
    name: "Samsung Galaxy S9",
    pixels: { x: 1440, y: 2960 },
    viewport: { x: 360, y: 740 },
    imageName: "s9.png"
  },
  19: {
    id: 19,
    name: "Samsung Galaxy S9+",
    pixels: { x: 1440, y: 2960 },
    viewport: { x: 360, y: 740 },
    imageName: "s9plus.png"
  },
  20: {
    id: 20,
    name: "Samsung Galaxy S8",
    pixels: { x: 1440, y: 2960 },
    viewport: { x: 360, y: 740 },
    imageName: "s8.png"
  },
  21: {
    id: 21,
    name: "Samsung Galaxy S8+",
    pixels: { x: 1440, y: 2960 },
    viewport: { x: 360, y: 740 },
    imageName: "s8plus.png"
  },
  22: {
    id: 22,
    name: "Samsung Galaxy S7",
    pixels: { x: 1440, y: 2560 },
    viewport: { x: 360, y: 640 },
    imageName: "s7.png"
  },
  23: {
    id: 23,
    name: "Samsung Galaxy S7 Edge",
    pixels: { x: 1440, y: 2560 },
    viewport: { x: 360, y: 640 },
    imageName: "s7edge.png"
  },
  24: {
    id: 24,
    name: "Web",
    pixels: { x: 1280, y: 800 },
    viewport: { x: 1280, y: 800 },
    imageName: "tab10.png"
  },
 
};

const viewportPopularity = {
    '360-640': 1,
    '375-667': 2,
    '414-736': 3,
}

export const PhonesArr = Object
.keys(phones)
.map(key => phones[key])
.sort((a,b) => {
    const xBigger = a.viewport.x > b.viewport.x;
    const yBigger = a.viewport.y > b.viewport.y;

    if (a.viewport.x === b.viewport.x) {
        if (a.viewport.y === b.viewport.y) return 0;

        return yBigger ? 1 : -1;
    }
    
    return xBigger ? 1 : -1;
});

let res = {};

export const PhonesArrUnique = Object
.keys(phones)
.map(key => phones[key])
.filter(item => {
    const key = item.viewport.x + '-' + item.viewport.y;
    const exists = res[key];
    res[key] = true;
    return !exists;
})
.map(item => {
    const key = item.viewport.x + '-' + item.viewport.y;
    item.popularity = viewportPopularity[key];
    return item;
})
.sort((a,b) => {
    const xBigger = a.viewport.x > b.viewport.x;
    const yBigger = a.viewport.y > b.viewport.y;

    if (a.viewport.x === b.viewport.x) {
        if (a.viewport.y === b.viewport.y) return 0;

        return yBigger ? 1 : -1;
    }
    
    return xBigger ? 1 : -1;
});
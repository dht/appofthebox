const state = {
  editorState: {
    currentComponentId: 1,
    currentElementId: 1,
    currentPhoneId: 1,
    currentResolutionId: 1
  },
  buckets: {
    1: {
      id: 1,
      colors: "{}",
      theme: "{}",
      datasets: "{}",
      components: {
        1: {
          id: 1,
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
    }
  },
  phoneResolutions: {
    1: {
      id: 1,
      name: "320 x 568",
      pixels: { x: 640, y: 1336 },
      viewport: { x: 320, y: 568 },
      examplePhoneId: 8
    },
    2: {
      id: 2,
      name: "360 x 640",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 360, y: 640 },
      examplePhoneId: 22,
      popularity: 1
    },
    3: {
      id: 3,
      name: "360 x 740",
      pixels: { x: 1440, y: 2960 },
      viewport: { x: 360, y: 740 },
      examplePhoneId: 18
    },
    4: {
      id: 4,
      name: "375 x 667",
      pixels: { x: 750, y: 1334 },
      viewport: { x: 375, y: 667 },
      examplePhoneId: 3,
      popularity: 2
    },
    5: {
      id: 5,
      name: "375 x 812",
      pixels: { x: 1125, y: 2436 },
      viewport: { x: 375, y: 812 },
      examplePhoneId: 1
    },
    6: {
      id: 6,
      name: "411 x 731",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 411, y: 731 },
      examplePhoneId: 9
    },
    7: {
      id: 7,
      name: "414 x 736",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 414, y: 736 },
      examplePhoneId: 2,
      popularity: 3
    },
    8: {
      id: 8,
      name: "480 x 853",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 480, y: 853 },
      examplePhoneId: 15
    },
    9: {
      id: 9,
      name: "1279 x 800 (Web)",
      pixels: { x: 1280, y: 800 },
      viewport: { x: 1280, y: 800 },
      examplePhoneId: 24
    }
  },
  phones: {
    1: {
      id: 1,
      name: "iPhone X",
      pixels: { x: 1125, y: 2436 },
      viewport: { x: 375, y: 812 },
      imageName: "iphonex.png",
      resolutionId: 5
    },
    2: {
      id: 2,
      name: "iPhone 8 Plus",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 414, y: 736 },
      imageName: "iphone8plus.png",
      resolutionId: 7
    },
    3: {
      id: 3,
      name: "iPhone 8",
      pixels: { x: 750, y: 1334 },
      viewport: { x: 375, y: 667 },
      imageName: "iphone8.png",
      resolutionId: 4
    },
    4: {
      id: 4,
      name: "iPhone 7 Plus",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 414, y: 736 },
      imageName: "iphone7plus.png",
      resolutionId: 7
    },
    5: {
      id: 5,
      name: "iPhone 7",
      pixels: { x: 750, y: 1334 },
      viewport: { x: 375, y: 667 },
      imageName: "iphone7.png",
      resolutionId: 4
    },
    6: {
      id: 6,
      name: "iPhone 6 Plus",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 414, y: 736 },
      imageName: "iphone6plus.png",
      resolutionId: 7
    },
    7: {
      id: 7,
      name: "iPhone 6/6S",
      pixels: { x: 750, y: 1334 },
      viewport: { x: 375, y: 667 },
      imageName: "iphone6.png",
      resolutionId: 4
    },
    8: {
      id: 8,
      name: "iPhone 5",
      pixels: { x: 640, y: 1336 },
      viewport: { x: 320, y: 568 },
      imageName: "iphone5.png",
      resolutionId: 1
    },
    9: {
      id: 9,
      name: "Nexus 6P",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 411, y: 731 },
      imageName: "nexus6p.png",
      resolutionId: 6
    },
    10: {
      id: 10,
      name: "Nexus 5X",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 411, y: 731 },
      imageName: "nexus5x.png",
      resolutionId: 6
    },
    11: {
      id: 11,
      name: "Google Pixel",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 411, y: 731 },
      imageName: "pixel.png",
      resolutionId: 6
    },
    12: {
      id: 12,
      name: "Google Pixel XL",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 411, y: 731 },
      imageName: "pixelxl.png",
      resolutionId: 6
    },
    13: {
      id: 13,
      name: "Google Pixel 2",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 411, y: 731 },
      imageName: "pixel2.png",
      resolutionId: 6
    },
    14: {
      id: 14,
      name: "Google Pixel 2 XL",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 411, y: 731 },
      imageName: "pixel2xl.png",
      resolutionId: 6
    },
    15: {
      id: 15,
      name: "Samsung Galaxy Note 5",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 480, y: 853 },
      imageName: "note5.png",
      resolutionId: 8
    },
    16: {
      id: 16,
      name: "LG G5",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 480, y: 853 },
      imageName: "g5.png",
      resolutionId: 8
    },
    17: {
      id: 17,
      name: "One Plus 3",
      pixels: { x: 1080, y: 1920 },
      viewport: { x: 480, y: 853 },
      imageName: "plus3.png",
      resolutionId: 8
    },
    18: {
      id: 18,
      name: "Samsung Galaxy S9",
      pixels: { x: 1440, y: 2960 },
      viewport: { x: 360, y: 740 },
      imageName: "s9.png",
      resolutionId: 3
    },
    19: {
      id: 19,
      name: "Samsung Galaxy S9+",
      pixels: { x: 1440, y: 2960 },
      viewport: { x: 360, y: 740 },
      imageName: "s9plus.png",
      resolutionId: 3
    },
    20: {
      id: 20,
      name: "Samsung Galaxy S8",
      pixels: { x: 1440, y: 2960 },
      viewport: { x: 360, y: 740 },
      imageName: "s8.png",
      resolutionId: 3
    },
    21: {
      id: 21,
      name: "Samsung Galaxy S8+",
      pixels: { x: 1440, y: 2960 },
      viewport: { x: 360, y: 740 },
      imageName: "s8plus.png",
      resolutionId: 3
    },
    22: {
      id: 22,
      name: "Samsung Galaxy S7",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 360, y: 640 },
      imageName: "s7.png",
      resolutionId: 2
    },
    23: {
      id: 23,
      name: "Samsung Galaxy S7 Edge",
      pixels: { x: 1440, y: 2560 },
      viewport: { x: 360, y: 640 },
      imageName: "s7edge.png",
      resolutionId: 2
    },
    24: {
      id: 24,
      name: "Web",
      pixels: { x: 1280, y: 800 },
      viewport: { x: 1280, y: 800 },
      imageName: "tab10.png",
      resolutionId: 9
    }
  }
};

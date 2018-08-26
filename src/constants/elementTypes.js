export default {
    PLACEHOLDER: "PLACEHOLDER",
    IMAGE: "IMAGE",
    ICON: "ICON",
    TEXT: "TEXT",
    VIEW_HORIZONTAL: "VIEW_HORIZONTAL",
    VIEW_VERTICAL: "VIEW_VERTICAL",
    SNIPPET: "SNIPPET"
};

export const templates = {
    PLACEHOLDER: (id, parentId) => [
        {
            id,
            parentId,
            type: "PLACEHOLDER",
            resolutions: {
                1: {
                    id: 1,
                    properties: {
                        fontSize: 14,
                        color: "yellow",
                        flex: 1
                    }
                }
            }
        }
    ],
    IMAGE: (id, parentId) => [
        {
            id,
            parentId,
            type: "IMAGE",
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
        }
    ],
    ICON: (id, parentId) => [
        {
            id,
            parentId,
            type: "ICON",
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
        }
    ],
    TEXT: (id, parentId) => [
        {
            id,
            parentId,
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
        }
    ],
    VIEW_HORIZONTAL: (id, parentId) => [
        {
            id,
            parentId,
            type: "VIEW_HORIZONTAL",
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
        }
    ],
    VIEW_VERTICAL: (id, parentId) => [
        {
            id,
            parentId,
            type: "VIEW_VERTICAL",
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
        }
    ],
    SNIPPET: (id, parentId) => [
        {
            id,
            parentId,
            type: "SNIPPET",
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
        }
    ]
};

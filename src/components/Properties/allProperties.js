export const properties = {
    fontSize: true,
    color: true,
    backgroundColor: true,
    backgroundSize: true,
    margin: true,
    padding: true,
    backgroundImage: true,
    border: true,
    width: true,
    height: true,
    flex: true,
    alignItems: true,
    justifyContent: true
};

export const dataLists = {
    alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    justifyContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around"
    ],
    backgroundSize: [
        "cover",
        "contain",
    ],
    backgroundColor: ["#eeeeee", "#333333", "#FFFF00"],
    color: ["#eeeeee", "#333333", "#FFFF00"],
};

export const PropertiesArray = Object.keys(properties);

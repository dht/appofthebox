import React from "react";

import { Properties } from "./Properties";
import { backgrounds } from "../../stories/backgrounds";

const properties = [
    { key: "fontSize", value: "30", placeholder: "20", resolution: 3 },
    { key: "color", placeholder: "#333333", resolution: 3 },
    { key: "backgroundColor", placeholder: "#ffff00", resolution: 3 },
    { key: "margin", value: "30", placeholder: "10", resolution: 3 },
    { key: "padding", placeholder: "15", resolution: 3 },
    { key: "backgroundImage", resolution: 3 },
    { key: "border", resolution: 3 },
    { key: "width", resolution: 3 },
    { key: "height", resolution: 3 },
    { key: "flex", placeholder: 1, resolution: 3 },
    { key: "alignItems", resolution: 3 },
    { key: "justifyContent", resolution: 3 }
];

export default (storiesOf, mod, action) => {
    storiesOf("Properties", mod)
        .addDecorator(backgrounds)
        .add("basic", () => (
            <Properties properties={properties} onValue={action} />
        ));
};

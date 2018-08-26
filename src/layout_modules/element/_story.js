import React from "react";

import { Element } from "./Element";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Element", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Element />);
};

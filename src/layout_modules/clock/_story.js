import React from "react";

import { Clock } from "./Clock";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Clock", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Clock />);
};

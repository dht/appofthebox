import React from "react";

import { Panel } from "./Panel";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Panel", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Panel />);
};

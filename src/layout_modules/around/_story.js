import React from "react";

import { Around } from "./Around";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Around", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Around />);
};

import React from "react";

import { Checkbox } from "./Checkbox";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Checkbox", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Checkbox />);
};

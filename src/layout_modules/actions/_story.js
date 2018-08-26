import React from "react";

import { Actions } from "./Actions";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Actions", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Actions />);
};

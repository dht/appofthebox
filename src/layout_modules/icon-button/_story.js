import React from "react";

import { IconButton } from "./IconButton";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("IconButton", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <IconButton />);
};

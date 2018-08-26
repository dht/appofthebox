import React from "react";

import { Tree } from "./Tree";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Tree", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Tree />);
};

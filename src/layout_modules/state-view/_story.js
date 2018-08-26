import React from "react";

import { StateView } from "./StateView";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("StateView", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <StateView />);
};

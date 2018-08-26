import React from "react";

import { Button } from "./Button";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Button", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Button />);
};

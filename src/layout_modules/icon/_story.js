import React from "react";

import { Input } from "./Input";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Input", mod)
        .addDecorator(backgrounds)
        .add("basic", () => (
            <Input
                placeholder="width"
                kind="width"
                value="50"
                onChange={action}
            />
        ))
        .add("color", () => (
            <Input
                kind="color" 
                value="#fefe9f"
                onChange={action}
            />
        ))
        .add("with list", () => (
            <Input
                placeholder="alignItems"
                kind="alignItems"
                onChange={action}
            />
        ));
};

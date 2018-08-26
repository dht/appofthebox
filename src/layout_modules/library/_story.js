import React from "react";

import { Library } from "./Library";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Library", mod)
        .addDecorator(backgrounds)
        .add("basic", () => (
            <Library
                placeholder="width"
                kind="width"
                value="50"
                onChange={action}
            />
        ))
     
};

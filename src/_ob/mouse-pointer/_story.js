import React from "react";

import { MousePointer } from "./MousePointer";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("MousePointer", mod)
        .add("Basic", () => <MousePointer />);
};

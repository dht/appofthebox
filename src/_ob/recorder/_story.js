import React from "react";

import { Recorder } from "./Recorder";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("Recorder", mod)
        .add("Basic", () => <Recorder />);
};

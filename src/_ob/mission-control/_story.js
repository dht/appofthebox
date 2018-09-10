import React from "react";

import { MissionControl } from "./MissionControl";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("MissionControl", mod)
        .add("Basic", () => <MissionControl />);
};

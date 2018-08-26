import React from "react";

import { PanelSettings } from "./PanelSettings";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("PanelSettings", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <PanelSettings />);
};

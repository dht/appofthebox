import React from "react";

import { Icon } from "./Icon";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Icon", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Icon />);
};

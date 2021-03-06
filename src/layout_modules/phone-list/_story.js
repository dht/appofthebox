import React from "react";

import { PhoneList } from "./PhoneList";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("PhoneList", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <PhoneList />);
};

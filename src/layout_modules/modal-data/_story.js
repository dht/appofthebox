import React from "react";

import { ModalData } from "./ModalData";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("ModalData", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <ModalData />);
};

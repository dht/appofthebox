import React from "react";

import { Modal } from "./Modal";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("Modal", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Modal />);
};

import React from "react";

import { ModalIconLibrary  } from "./ModalIconLibrary";
import { backgrounds } from "../../stories/backgrounds";

export default (storiesOf, mod, action) => {
    storiesOf("ModalIconLibrary", mod)
        .addDecorator(backgrounds)
        .add("basic", () => (
            <ModalIconLibrary/>
        ))
       
};

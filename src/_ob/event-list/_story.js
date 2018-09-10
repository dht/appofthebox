import React from "react";

import { EventList } from "./EventList";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("EventList", mod)
        .add("Basic", () => <EventList />);
};

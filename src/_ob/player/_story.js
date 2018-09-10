import React from "react";

import { Player } from "./Player";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("Player", mod)
        .add("Basic", () => <Player />);
};

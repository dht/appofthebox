import React from "react";

import { Panel } from "./Panel";
import { backgrounds } from "../../stories/backgrounds";

const Cmp1 = () => <div>Content 1</div>;
const Cmp2 = () => <div>Content 2</div>;
const Cmp3 = () => <div>Content 3</div>;

const config = {
    tabs: [
        {
            id: 1,
            name: "Tools",
            content: [
                {
                    component: <Cmp1 />
                }
            ]
        },
        {
            id: 2,
            name: "Tree",
            content: [
                {
                    component: <Cmp2 />
                }
            ]
        },
        {
            id: 3,
            name: "Library",
            content: [
                {
                    component: <Cmp3 />
                }
            ]
        }
    ]
};

export default (storiesOf, mod, action) => {
    storiesOf("Panel", mod)
        .addDecorator(backgrounds)
        .add("basic", () => <Panel config={config} />);
};

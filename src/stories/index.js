import React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Input from "../layout_modules/Input/_story";
import Properties from "../layout_modules/Properties/_story";

Input(storiesOf, module, action);
Properties(storiesOf, module, action);




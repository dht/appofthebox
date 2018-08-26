import React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Around from "../layout_modules/around/_story";
import Button from "../layout_modules/button/_story";
import Checkbox from "../layout_modules/checkbox/_story";
import Clock from "../layout_modules/clock/_story";
import Element from "../layout_modules/element/_story";
import Icon from "../layout_modules/icon/_story";
import IconButton from "../layout_modules/icon-button/_story";
import Input from "../layout_modules/input/_story";
import Library from "../layout_modules/library/_story";
import Modal from "../layout_modules/modal/_story";
import ModalData from "../layout_modules/modal-data/_story";
import ModalIconLibrary from "../layout_modules/modal-icon-library/_story";
import Panel from "../layout_modules/panel/_story";
import PhoneList from "../layout_modules/phone-list/_story";
import Properties from "../layout_modules/properties/_story";
import Tree from "../layout_modules/tree/_story";

Around(storiesOf, module, action);
Button(storiesOf, module, action);
Checkbox(storiesOf, module, action);
Clock(storiesOf, module, action);
Element(storiesOf, module, action);
Icon(storiesOf, module, action);
IconButton(storiesOf, module, action);
Input(storiesOf, module, action);
Library(storiesOf, module, action);
Modal(storiesOf, module, action);
ModalData(storiesOf, module, action);
ModalIconLibrary(storiesOf, module, action);
Panel(storiesOf, module, action);
PhoneList(storiesOf, module, action);
Properties(storiesOf, module, action);
Tree(storiesOf, module, action);




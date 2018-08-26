import { combineReducers } from "redux";

import {
    editorState,
    bucket,
    phones,
    phoneResolutions
} from "./appState/appState";
import { modal } from "./modal/modal";

export default combineReducers({
    editorState,
    bucket,
    phones,
    phoneResolutions,
    modal
});

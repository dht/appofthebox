import { combineReducers } from "redux";

import {
    editorState,
    bucket,
    phones,
    phoneResolutions
} from "./appState/appState";
import { modal } from "./modal/modal";
import { recordState } from "../_ob/recordState";

export default combineReducers({
    editorState,
    bucket,
    phones,
    phoneResolutions,
    modal,
    recordState
});

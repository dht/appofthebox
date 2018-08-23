import {combineReducers} from "redux";

import { editorState, bucket, phones, phoneResolutions } from "./appState/appState";

export default combineReducers({
    editorState, 
    bucket,
    phones, 
    phoneResolutions
})
import {combineReducers} from "redux";

import { editorState, bucket } from "./appState/appState";

export default combineReducers({
    editorState, 
    bucket
})
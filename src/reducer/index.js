import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {fetchReducer} from "./fetchReducer";

export const allReducer = combineReducers({
    firebase : firebaseReducer,
    fetchReducer : fetchReducer
})
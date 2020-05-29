import {applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {getFirebase} from "react-redux-firebase";
import {allReducer} from "../reducer";
import {composeWithDevTools} from "redux-devtools-extension";


const middleware = thunk

export const store = createStore(allReducer,composeWithDevTools(applyMiddleware(middleware)))
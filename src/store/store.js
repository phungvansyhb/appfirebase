import {applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {allReducer} from "../reducer";
import {composeWithDevTools} from "redux-devtools-extension";


const middleware = thunk

export const store = createStore(allReducer,composeWithDevTools(applyMiddleware(middleware)))
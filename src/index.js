import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./component/page/Login/Login";
import Page404 from "./component/page/page404";
import SignUp from "./component/page/Login/Signup";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/signup'>
                    <SignUp/>
                </Route>
                <Route exact path='/home'>
                    <App/>
                </Route>
                <Route path="*"><Page404/></Route>
            </Switch>
        </Provider>
    </Router>
    ,
    document.getElementById("root"));

serviceWorker.unregister();

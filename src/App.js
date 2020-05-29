
import React, {useState} from "react";
import {appfirebase} from "./firebase.config";
import BarChart from "./component/page/chart/Barchart";
import LineChar from "./component/page/chart/LineChar";
require('dotenv').config();

function App() {
    const [type, settype] = useState('bar');


    //call again every time change type
    // let db = appfirebase.database().ref("Messages");
    //
    // db.once("value").then(function (snap) {
    //     console.log( snap.val() );
    // });
    return (
        <div className="App">
            <button onClick={() => settype('bar')}>bar</button>
            <button onClick={() => settype('line')}>line</button>
            {(type === "line") ? <LineChar/> : <BarChart/>}


        </div>
    );
}

export default App;

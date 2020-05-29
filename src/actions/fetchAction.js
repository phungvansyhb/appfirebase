import {type} from "./types"
import {getFirebase} from "react-redux-firebase";
import {firebaseMsgref} from "../firebase.config";


export function fetchFfb() {
    return dispatch=>{
        firebaseMsgref.on("value" , snapshot => {
            dispatch({
                type:type.fetchList,
                payload:snapshot.val()
            })
        })
    }

}
export function fetchList(list) {
    return {
        type: type.fetchList,
        payload : list
        // need process list here
    }
}
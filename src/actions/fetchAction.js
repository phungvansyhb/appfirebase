import {types} from "./types"
import {firebaseref} from "../firebase.config";
import {userId} from "../firebase.config";

export function changeType(type){
    return {
        type: types.changeType ,
        payload : type
    }
}

export function getDate(date) {
    return {
        type: types.getDate,
        payload: date
    }
}

export function fetchFfb(date , type) {
    return dispatch => {
        firebaseref("Messages/"+userId+"/"+type)
            .orderByChild('date')
            .equalTo(date)
            //.limitToFirst(24)
            .on("value", snapshot => {
            dispatch(
                fetchList(snapshot.val())
            )
        })
    }

}

export function fetchList(list) {
    return {
        type: types.fetchList,
        payload: list
        // need process list here
    }
}
import {types} from '../actions/types'
import moment from "moment";

const initialState = {
    type : "GAS",
    date:  moment(new Date()).format("YYYY-DD-MM"),
    listData : [],
    listLabel : []
}

export function fetchReducer(state = initialState , action) {
    switch (action.type) {
        case types.getDate:
            return {...state , date: action.payload};
        case types.changeType:
            return {...state , type: action.payload};
        case types.fetchFromFirebase:
            return {...state };
        case types.fetchList:
                let listDataObj = action.payload ;
                let listData = [];
                let listLabel = [];
            for (const keyelm in listDataObj) {
                listData = listData.concat(listDataObj[keyelm].data);
                listLabel = listLabel.concat(listDataObj[keyelm].time)
            }
            console.log(action.payload)
            return {...state,listLabel: listLabel , listData: listData  }

        default: return state
    }
}
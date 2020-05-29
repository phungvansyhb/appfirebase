import {type} from '../actions/types'


const initialState = {
    list : []
}

export function fetchReducer(state = initialState , action) {
    switch (action.type) {
        case type.fetchFromFirebase:
            return {...state };
        case type.fetchList:
            return {...state,list: action.payload}
        default: return state
    }
}
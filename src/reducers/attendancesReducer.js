
import { GET_ATTENDANCES, UPDATE_ATTENDANCE } from "../actions/type";

const initialState={
    attendances:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_ATTENDANCES:
            return{
                ...state,
                attendances:action.payload
            }
                // case UPDATE_ATTENDANCE: 
                //     return{
                //         ...state
                //     }
        default:
            return state;
    }
}
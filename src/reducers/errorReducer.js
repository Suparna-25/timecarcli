import { GET_ERRORS,GET_EMPERRORS } from '../actions/type';

const initialState={};
export default function(state=initialState,action){
    switch(action.type){
        case GET_ERRORS:
            return action.payload;
        case GET_EMPERRORS:
            return action.payload;
        default:
            return state;
    }
}

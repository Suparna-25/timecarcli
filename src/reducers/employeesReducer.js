import {GET_EMPLOYEES,GET_ATTENDANCE,DELETE_EMPLOYEE} from '../actions/type';



const initialState={
    employees:[],
    employee:{}
};




export default function(state=initialState,action){
    switch(action.type){
        case GET_EMPLOYEES:
            return{
                ...state,
                employees:action.payload
            }
            case GET_ATTENDANCE:
            return{
                ...state,
                employee:action.payload
            }
            case DELETE_EMPLOYEE:
                return{
                    ...state,
                    employees:state.employees.filter(
                        employee=>employee.empId!==action.payload
                    )
                };
            default:
                return state;
                
    }
}
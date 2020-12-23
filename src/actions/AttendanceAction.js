import axios from 'axios';
import { GET_ERRORS,GET_ATTENDANCES,UPDATE_ATTENDANCE} from './type';
export const createAttendance=(attendance,history)=>async dispatch=> {
    try {
        console.log(attendance);
        await axios.post ("http://localhost:8080/attendance/add",attendance)
        history.push("/dashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getAttendances=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/employee/attendance/46023443");
    dispatch({
        type:GET_ATTENDANCES,
        payload:res.data
    })
}

export const updateAttendance = (id,status) => {
    axios({
        method : 'PUT',
        url : `http://localhost:8080/attendance/update/${id}/${status}`
    }).then(res => {
       console.log("log from then of update");
       window.location.reload();
    })
    .catch(err => {
        console.error("PUT API FAILED");
    })
}



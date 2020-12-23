import axios from "axios";
import { GET_EMPERRORS,GET_EMPLOYEES,GET_EMPLOYEE,DELETE_EMPLOYEE} from './type';

export const createEmployee = (employee, history) => async (dispatch) => {
  console.log("--=>",employee);
  try {
    await axios.post("http://localhost:8080/employee/add", employee);
    history.push("/EmployeeDashboard");
  } catch (error) {
    dispatch({
      type: GET_EMPERRORS,
      payload: error.response.data,
    });
  }
};


// export const getEmployees = () => async (dispatch) => {
//   console.log("emp Action");
//   const res = await axios
//     .get("http://localhost:8080/supervisior/46045157")
//     .then((res) => {
//       console.log("axios : " + res);
//       return res;
//     })
//     .catch((e) => console.log("e: "+e));
//   console.log("res");
//   console.log("res" + res.data);
//   dispatch({
//     type: GET_EMPLOYEES,
//     payload: res.data,
//   });
// };

// export const getEmployees = () => {
//   console.log("Dispatc1h !!")
//   return (dispatch) => {
//     console.log("Dispatch !!");
//     getEmployeeList()
//     .then(res => 
//       dispatch(getEmployeeListActionCreator(res))
//     )
//     .catch(err => {
//       console.log(err)
//     })
//   }

//     // getEmployeeList()
//     // .then(res => {
//     //   // dispatch(getEmployeeListActionCreator())
//     // })
//     // .catch(err => {
//     //   console.log(err)
//     // })
  
// }

// export const getAttendance = (id, history) => async (dispatch) => {
//   const res = await axios.get(
//     `http://localhost:8080/employee/attendance/${id}`
//   );
//   dispatch({
//     type: GET_ATTENDANCE,
//     payload: res.data,
//   });
// };

export const getEmployees = () => {
  return (dispatch) => {
    axios.get("http://localhost:8080/supervisior/46045157")
    .then(res => {
      dispatch({
        type : GET_EMPLOYEES,
        payload : res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
};

export const deleteEmployeeById = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure ? This will delete the project and the data related to it"
    )
  ) {
    await axios.delete("http://localhost:8080/delete/${id}");
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: id,
    });
  }
};

export const getEmployeeById = (payload) => {
  axios({
    method : 'POST',
    url : `http://localhost:8080/employee/update/${payload.empId}`,
    data : payload,
    headers : {
      'content-type' : 'application/json'
    }
  })
  .then(res => {
    console.log("Success");
  })
  .catch(err => {
    console.log("err",err)
  })
};

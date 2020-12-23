import axios from "axios";
import { GET_EMPERRORS,GET_EMPLOYEES,GET_EMPLOYEE,DELETE_EMPLOYEE} from './type';

const API_HOST = 'http://localhost:3000';

export const createEmployee = (employee, history) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/employee/add", employee);
    history.push("/employee/dashboard");
  } catch (error) {
    dispatch({
      type: GET_EMPERRORS,
      payload: error.response.data,
    });
  }
};

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

export const getEmployeeById = (empId) => {
  return axios.get(`http://localhost:8080/employee/${empId}`)
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

export const updateEmployeeById = (payload) => {
  axios.post("http://localhost:8080/employee/add", payload)
  .then(res => {
    alert("Success Fully Updated !!! ");
    setTimeout(() => {
      window.location.href =`${API_HOST}/employee/dashboard`;
    },500)
    
  })
  .catch(err => {
    alert("Some error Occured !")
    console.log("err",err)
  })
};

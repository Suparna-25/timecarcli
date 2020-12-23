import React from "react";
import CreateEmpButton from "./employees/CreateEmpButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEmployees } from "../actions/EmployeeAction";
//import {deleteEmployeeById} from '../actions/EmployeeAction';
import { Link } from "react-router-dom";


class EmployeeDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  onDeleteClick = (empId) => {
    console.log("--------EmployeeComponent:onDeleteClick Called--------");
  };
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    console.log("this.props.emp :" + this.props.employees);
    const { employees } = this.props.employees || [];

    return (
      <div>
        <h1 className="display-4 text-center">List of Employees</h1>
        <br />
        <div className="u-spacer--xl"><CreateEmpButton /></div>
        <br />
        <hr />
        <div className="row u-spacer--xl">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
              <th>ID</th>
               <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Location</th>
                <th>Supervisior ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                (console.log(employees),
                employees &&
                employees.map((employee) => (
                  <tr key={employee.empId}>
                     <td>{employee.empId}</td>
                    <td> {employee.empName}</td>
                    <td> {employee.phoneNumber} </td>
                    <td> {employee.empEmail}</td>
                    <td> {employee.empLocation}</td>
                    <td> {employee.supervisiorId}</td>

                    <td>
                     <Link to = {`/updateEmployee?id=${employee.empId}`} className="btn btn-info u-spacer--sm-hz">
                        {" "}
                        Update{" "}
                </Link> 
                      <Link
                        to={`/viewEmployee?id=${employee.supervisiorId}`}
                        className="btn btn-info"
                      >
                        View{" "}
                      </Link>
                    </td>
                  </tr>
                )))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

EmployeeDashBoard.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  deleteEmployeeById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployees : () => dispatch(getEmployees())
  }
}


export default connect(mapStateToProps, { getEmployees })(EmployeeDashBoard);

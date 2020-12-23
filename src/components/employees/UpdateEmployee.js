import React, { Component } from 'react'
import {getEmployees,createEmployee, getEmployeeById} from '../../actions/EmployeeAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import qs from 'query-string';

 class UpdateEmployee extends Component {

    constructor(props){
        super(props);
        this.state=  {
            "empId": "",
            "empName": "",
            "phoneNumber": "",
            "empEmail": "",
            "empLocation": "",
            "supervisiorId": ""           
        }
    }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }

     getEmployeIdFromUrl = () => {
        if(window){
            const parsed_query = qs.parse(window.location.search);
            const employeId = parsed_query.id;
            return employeId;
        }
     }

     onSubmit=(event)=>{
        event.preventDefault();
        const newEmployee = {
            empId: this.getEmployeIdFromUrl(),
            empName:this.state.empName,
            phoneNumber:this.state.phoneNumber,
            empEmail:this.state.empEmail,
            empLocation:this.state.empLocation,
            supervisiorId:this.state.supervisiorId
        }

      this.props.getEmployeeById(newEmployee);

    }

    componentDidMount(){
       const {id} = this.props.match.params;
    }

    componentWillReceiveProps(nextProps){
        const {
            empId = 46023443,
           empName,
           phoneNumber,
           empEmail,
           empLocation,
           supervisiorId           
        }=nextProps.employee;

        this.setState({
            empId,
            empName,
            phoneNumber,
            empEmail,
            empLocation,
            supervisiorId         
        });
    }
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Employee</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg " 
                                        placeholder="Unique Employee Id"
                                        name="empId" 
                                        onChange={this.onChange}
                                        value={this.getEmployeIdFromUrl()}
                                        disabled />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Employee Name"
                                        name="empName"
                                        onChange={this.onChange}
                                        value={this.state.empName}
                                        />
                                </div>
                             
                                <div className="form-group">
                                    <input 
                                    className="form-control form-control-lg" 
                                    name="phoneNumber"
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input 
                                    className="form-control form-control-lg" 
                                    name="empEmail"
                                    onChange={this.onChange}
                                    value={this.state.empEmail}
                                    placeholder="Email id"/>
                                </div>
                                <div className="form-group">
                                    <input 
                                    className="form-control form-control-lg" 
                                    name="empLocation"
                                    onChange={this.onChange}
                                    value={this.state.empLocation}
                                    placeholder="Employee Location"/>
                                </div>
                                <div className="form-group">
                                <input 
                                className="form-control form-control-lg" 
                                name="supervisiorId"
                                onChange={this.onChange}
                                value={this.state.supervisiorId}
                                placeholder="Supervisior Id"/>
                            </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    employee: state.employees.employee
  });

  const mapDispatchToProps = (dispatch) => {
    return {
      getEmployeeById
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(UpdateEmployee);
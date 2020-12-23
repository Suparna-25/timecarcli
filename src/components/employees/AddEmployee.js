import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createEmployee} from "../../actions/EmployeeAction";
import classnames from "classnames";

class AddEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            empId:'',
            empName:'',
            phoneNumber:'', 
            employeeEmail:'',
            empLocation:'',
           supervisiorId:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const newEmployee = {
            empId:this.state.empId,
            empName:this.state.empName,
            phoneNumber:this.state.phoneNumber,
            empEmail:this.state.empEmail,
            empLocation:this.state.empLocation,
            supervisiorId:this.state.supervisiorId
        }
        this.props.createEmployee(newEmployee,this.props.history);

    }
    render(){
        const {errors}=this.state;
        return (
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Employee</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                        <h6>Employee Id</h6>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.empId})}
                                    placeholder="Unique Employee Id"
                                    name="empId" 
                                    onChange={this.onChange}
                                    value={this.state.empId}/>
                                    {errors.empId && (
                                        <div className="invalid-feedback">
                                            {errors.empId}
                                        </div>
                                    )}
                            </div>
                            <h6>Employee Name</h6>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.empName})}
                                    placeholder="Employee Name" 
                                    name="empName" 
                                    onChange={this.onChange}
                                    value={this.state.empName}
                                    />
                                    {errors.empName && (
                                        <div className="invalid-feedback">
                                            {errors.empName}
                                        </div>
                                    )}
                            </div>
                            <h6>Phone Number</h6>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    className={classnames("form-control form-control-lg",{"is-invalid":errors.phoneNumber})}
                                    placeholder="Phone Number" 
                                    name="phoneNumber" 
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    />
                                    {errors.phoneNumber && (
                                        <div className="invalid-feedback">
                                            {errors.phoneNumber}
                                        </div>
                                    )}
                            </div>
                        <h6>Email Id</h6>
                        <div className="form-group">
                        <input 
                            type="text" 
                            className={classnames("form-control form-control-lg",{"is-invalid":errors.empEmail})}
                            placeholder="Employee Email" 
                            name="empEmail" 
                            onChange={this.onChange}
                            value={this.state.empEmail}
                            />
                            {errors.empEmail && (
                                <div className="invalid-feedback">
                                    {errors.empEmail}
                                </div>
                            )}
                    </div>
                    <h6>Location</h6>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className={classnames("form-control form-control-lg",{"is-invalid":errors.empLocation})}
                        placeholder="Employee Location" 
                        name="empLocation" 
                        onChange={this.onChange}
                        value={this.state.empLocation}
                        />
                        {errors.empLocation && (
                            <div className="invalid-feedback">
                                {errors.empLocation}
                            </div>
                        )}
                    </div>
                    <h6>Supervisior Id</h6>
                    <div className="form-group">
                    <input 
                        type="number" 
                        className={classnames("form-control form-control-lg",{"is-invalid":errors.supervisiorId})}
                        placeholder="Supervisior Id" 
                        name="supervisiorId" 
                        onChange={this.onChange}
                        value={this.state.supervisiorId}
                        />
                        {errors.supervisiorId && (
                            <div className="invalid-feedback">
                                {errors.supervisiorId}
                            </div>
                        )}
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
AddEmployee.propTypes = {
    createEmployee:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createEmployee})(AddEmployee);
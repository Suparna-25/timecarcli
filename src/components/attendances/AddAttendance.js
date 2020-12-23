import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createAttendance } from "../../actions/AttendanceAction";
import classnames from "classnames";
import "./styles.css";
class AddAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: "",
      inTime: "",
      outTime: "",
      attendanceDate: "",
      reason: "",
      typeId: "",
      status: "",
      errors: {},
    };
    //this.onChange=this.onChange.bind(this);
  }

  // life cycle hook
  componentWillReceiveProps(nextProps) {
    console.log("--------componentWillReceiveProps : Called----------");
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.employeeId);
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.inTime >= this.state.outTime) {
      return alert("Out Time must be greater than In Time");
    } else {
      const recAttendance = {
        employeeId: this.state.employeeId,
        inTime: this.state.inTime,
        outTime: this.state.outTime,
        attendanceDate: this.state.attendanceDate,
        reason: this.state.reason,
        typeId: this.state.typeId,
        status: this.state.status,
      };
      console.log(recAttendance);
      this.props.createAttendance(recAttendance, this.props.history);
    }
  };
  
  render() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear() - 10; // change according to year 0 for current
    var today1 = yyyy + "-" + mm + "-" + dd;
    const { errors } = this.state;
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center ">Add Attendance</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="number"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.employeeId,
                    })}
                    placeholder="Employee Id"
                    name="employeeId"
                    onChange={this.onChange}
                  />
                  {errors.empId && (
                    <div className="invalid-feedback">{errors.employeeId}</div>
                  )}
                </div>
                <h6>In Time</h6>
                <div className="form-group">
                  <input
                    type="time"
                    className="form-control form-control-lg"
                    name="inTime"
                    onChange={this.onChange}
                    value={this.state.inTime}
                  />
                </div>
                <h6>Out Time</h6>
                <div className="form-group">
                  <input
                    type="time"
                    className="form-control form-control-lg"
                    name="outTime"
                    onChange={this.onChange}
                    value={this.state.outTime}
                  />
                </div>
                <h6>Attendance Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="attendanceDate"
                    placeholder="yyyy-mm-dd"
                    onChange={this.onChange}
                    value={this.state.attendanceDate}
                    max={today1}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.reason,
                    })}
                    placeholder="Reason"
                    name="reason"
                    onChange={this.onChange}
                    value={this.state.reason}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">{errors.reason}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="typeId">
                    <h6>Type Id </h6>
                  </label>
                  <select
                    name="typeId"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.typeId,
                    })}
                    onChange={this.onChange}
                    value={this.state.typeId}
                  >
                    <option value="" defaultValue>
                      --select--
                    </option>
                    <option value="Forgot Card">Forgot Card</option>
                    <option value="Client Location">Client Location</option>
                    <option value="Work From Home">Work From Home</option>
                    <option value="Business Travel">Business Travel</option>
                    <option value="Missed Both Swipes">
                      Missed Both Swipes
                    </option>
                  </select>
                  {errors.typeId && (
                    <div className="invalid-feedback">{errors.typeId}</div>
                  )}
                </div>
                <h6>Status</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.status,
                    })}
                    placeholder="Status"
                    name="status"
                    onChange={this.onChange}
                  />
                  {errors.empId && (
                    <div className="invalid-feedback">{errors.status}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddAttendance.propTypes = {
  createAttendance: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { createAttendance })(AddAttendance);

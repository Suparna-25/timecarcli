import React from "react";
import CreateButton from './attendances/CreateButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getAttendances, updateAttendance} from '../actions/AttendanceAction';
import {Link,Route,Router} from 'react-router-dom';
import axios from 'axios';

class DashboardComponent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            attendances:[]
        }
    }
    componentDidMount(){
       this.props.getAttendances();
    }
    handleUpdate(userId){
        const status = prompt("Please enter the status");
        console.log(status,userId);
        updateAttendance(userId,status);
    }      
    render() {

         const {attendances} =  this.props.attendances;
      
        return (
            <div>
            <h1 className="display-4 text-center">List of Attendance</h1>
            <br/>
            <div className="u-spacer--xl"><CreateButton/></div>
            <br/>
            <hr/>
            <div>
                     <table className = "table table-striped table-bordered u-spacer--xl">
                         <thead>
                             <tr>
                                <th>ID</th>
                                 <th>EMPLOYEE ID</th>
                                 <th>IN TIME</th>
                                 <th>OUT TIME</th>
                                 <th>DATE</th>
                                 <th>REASON</th>
                                 <th>TYPE</th>
                                 <th>STATUS</th>
                                 <th>ACTION</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                             
                            attendances.map(
                                     (attendance) => 
                                     <tr key = {attendance.id}>
                                          <td>{attendance.id}</td>
                                          <td> 46023443</td>
                                          <td> {attendance.inTime}</td>
                                          <td> {attendance.outTime} </td>   
                                           <td>{attendance.attendanceDate}</td>
                                          <td> {attendance.reason}</td>
                                          <td> {attendance.typeId}</td>
                                          <td> {attendance.status}</td>
                                        
                                          <td>
                                           { /*<Link to={"/updateAttendance/"+attendance.id} className="btn btn-info"> Update </Link>*/}
                                           <button classname='btn btn-info' onClick={this.handleUpdate.bind(this,attendance.id)}>
                                           Update
                                         </button>
                                          </td>
                                          </tr>
                                 )
                             }
                         </tbody>
                     </table>
                 </div>
         </div>

     );
 }
}
DashboardComponent.propTypes={
    getAttendances:PropTypes.func.isRequired,
    

}

const mapStateToProps=(state)=>({
    attendances:state.attendances
});
export default connect(mapStateToProps,{getAttendances})(DashboardComponent);

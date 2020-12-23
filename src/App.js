import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import React, { Component } from "react";
import HeaderComponent from "./components/layout/HeaderComponent";
import AddAttendance from "./components/attendances/AddAttendance";
import CreateButton from "./components/attendances/CreateButton";
import {Link,Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardComponent from "./components/DashboardComponent";
import EmployeeDashboard from "./components/EmployeeDashboard";
import AddEmployee from "./components/employees/AddEmployee";
import UpdateEmployee from "./components/employees/UpdateEmployee";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent />
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={DashboardComponent}/>
        <Route exact path="/viewEmployee" component={DashboardComponent}/>
         {/* <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Attendance</h1>
                 
                  <br />
                  <hr />
                </div>
              </div>
            </div>
          </div>*/}
        <Route exact path="/addProject" component={AddAttendance} />
        <Route exact path="/addEmployee" component={AddEmployee} />
        <Route exact path="/employee/dashboard" component={EmployeeDashboard}/>
        <Route exact path="/updateEmployee" component={UpdateEmployee}/>
      </Router>
    </Provider>
  );
}

export default App;

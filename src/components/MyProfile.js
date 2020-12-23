import React from "react";
class MyProfile extends React.Component{
constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/employee/46023443")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        
      })
  }

  render() {
    let tbody;
    if (this.state.data !== null) {
      tbody = (
        <tbody>
          <tr>
            <th scope="row">Employee id: </th>
            <td>{this.state.data.empId}</td>
          </tr>
          <tr scope="row">
            <th>Employee name: </th>
            <td>{this.state.data.empName}</td>
          </tr>
          <tr>
            <th scope="row">Phone number: </th>
            <td>{this.state.data.phoneNumber}</td>
          </tr>
          <tr>
            <th scope="row">Employee email: </th>
            <td>{this.state.data.empEmail}</td>
          </tr>
          <tr>
            <th scope="row">Employee location: </th>
            <td>{this.state.data.empLocation}</td>
          </tr>
          <tr>
            <th scope="row">Supervisior Id: </th>
            <td>{this.state.data.supervisiorId}</td>
          </tr>
        </tbody>
      );
    } else {
      tbody = <h1>Loading.....</h1>;
    }

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">My Profile</h1>

              <table
                className="table text-left"
                style={{ width: "80%", minWidth: "450px" }}
              >
                <thead className="thead-light text-center">
                  <tr>
                    <th scope="col" colSpan="2">
                      Employee Detail:
                    </th>
                  </tr>
                </thead>
                {tbody}
              </table>
              <EmployeeDetail attendence={this.state.attendence} />
              <AttendanceBoard/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyProfile;
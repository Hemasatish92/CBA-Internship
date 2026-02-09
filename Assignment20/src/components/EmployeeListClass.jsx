import React from "react";

class EmployeeListClass extends React.Component {
  componentDidMount() {
    console.log("EmployeeList mounted");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employees.length !== this.props.employees.length) {
      console.log("Employee list updated");
    }
  }

  componentWillUnmount() {
    console.log("EmployeeList unmounted");
  }

  render() {
    return (
      <div>
        {this.props.employees.map((emp) => (
          <div key={emp.id}>
            <p>{emp.name} - {emp.role}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default EmployeeListClass;

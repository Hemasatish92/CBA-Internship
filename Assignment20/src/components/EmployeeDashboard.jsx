import "../App.css";
import { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("Employees updated");
  }, [employees]);

  const addEmployee = (employee) => {
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id ? employee : emp
        )
      );
      setEditingEmployee(null);
      setMessage("Employee Updated Successfully");
    } else {
      setEmployees([...employees, employee]);
      setMessage("Employee Added Successfully");
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const filteredEmployees =
    filter === "all"
      ? employees
      : employees.filter((emp) =>
          filter === "active" ? emp.active : !emp.active
        );

  return (
    <div className="container">
      <h2 className="dashboard-title">Employee Management Dashboard</h2>
      <p className="total-count">Total Employees: {employees.length}</p>

      {message && <p className="success-msg">{message}</p>}

      <EmployeeForm
        addEmployee={addEmployee}
        editingEmployee={editingEmployee}
      />

      <div className="filter">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Employees</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <EmployeeList
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
        editEmployee={setEditingEmployee}
      />
    </div>
  );
}

export default EmployeeDashboard;

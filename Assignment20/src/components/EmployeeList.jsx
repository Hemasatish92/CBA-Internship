function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  return (
    <div className="employee-grid">
      {employees.map((emp) => (
        <div className="employee-card" key={emp.id}>
          <h4>{emp.name}</h4>
          <p>{emp.email}</p>
          <p>{emp.role}</p>

          <span className={`badge ${emp.active ? "active" : "inactive"}`}>
            {emp.active ? "Active" : "Inactive"}
          </span>

          <div className="btn-group">
            <button
              className="btn-edit"
              onClick={() => editEmployee(emp)}
            >
              Edit
            </button>

            <button
              className="btn-delete"
              onClick={() => deleteEmployee(emp.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;   // ✅ THIS LINE IS REQUIRED

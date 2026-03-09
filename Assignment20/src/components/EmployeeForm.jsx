import { useEffect, useState } from "react";

function EmployeeForm({ addEmployee, editingEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setEmail(editingEmployee.email);
      setRole(editingEmployee.role);
      setActive(editingEmployee.active);
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee({
      id: editingEmployee ? editingEmployee.id : Date.now(),
      name,
      email,
      role,
      active
    });

    setName("");
    setEmail("");
    setRole("");
    setActive(false);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>{editingEmployee ? "Edit Employee" : "Add Employee"}</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option>Developer</option>
        <option>Manager</option>
        <option>HR</option>
      </select>

      {/* ✅ Properly aligned checkbox */}
      <div className="checkbox-row">
        <input
          type="checkbox"
          id="active"
          checked={active}
          onChange={() => setActive(!active)}
        />
        <label htmlFor="active">Active Employee</label>
      </div>

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;

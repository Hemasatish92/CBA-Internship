import { useState } from "react";

function LoginRole() {
  const [role, setRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <h3>
        {role === "Admin"
          ? "Welcome Admin! You have full access"
          : "Welcome User! Limited access granted"}
      </h3>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginRole;

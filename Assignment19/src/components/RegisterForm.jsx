import { useState } from "react";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
    } else {
      setError("");
      setSuccess(true);
    }
  };

  if (success) {
    return <h3>Registration Successful</h3>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>User Registration</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      /><br />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;

import { useState } from "react";

function ShowHidePassword() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <h3>Email Entered: {email}</h3>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input
        type={show ? "text" : "password"}
        placeholder="Password"
      /><br />

      <label>
        <input
          type="checkbox"
          onChange={() => setShow(!show)}
        />
        Show Password
      </label><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ShowHidePassword;

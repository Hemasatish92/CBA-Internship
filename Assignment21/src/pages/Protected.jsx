import { Link } from "react-router-dom";

function Protected() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <>
        <h2>🚫 Access Denied</h2>

        <Link to="/">Home</Link> <br />
        <Link to="/login">Login</Link>
      </>
    );
  }

  return <h2>✅ Welcome</h2>;
}

export default Protected;

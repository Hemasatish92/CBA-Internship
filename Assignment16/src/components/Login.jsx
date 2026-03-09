const LoginStatus = ({ isLoggedIn }) => {
  return (
    <h2>{isLoggedIn ? "Welcome User" : "Please Login"}</h2>
  );
};

export default LoginStatus;

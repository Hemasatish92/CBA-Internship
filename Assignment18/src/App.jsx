import UserProfile from "./components/UserProfile";
import CartFunction from "./components/CartFunction";
import CartClass from "./components/CartClass";
import UsersFunction from "./components/UserFunction";
import UsersClass from "./components/UserClass";   

function App() {
  const user = {
    name: "Hema",
    email: "hema@gmail.com",
    role: "Student"
  };

  return (
    <div style={{ textAlign: "center" }}>
      <UserProfile
        name={user.name}
        email={user.email}
        role={user.role}
      />
      <hr />
      <CartFunction />
      <hr />
      <CartClass />
      <hr />
       <UsersFunction />
      <hr />
      <UsersClass />
    </div>
  );
}

export default App;

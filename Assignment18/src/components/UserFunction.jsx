import { useEffect, useState } from "react";

function UsersFunction() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

    // cleanup (optional)
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <ul className="center-list">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersFunction;

import { useEffect, useState } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Network Error");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Failed to fetch users");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="center-page">
        <div className="spinner"></div>
        <p>Loading Users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center-page">
        <div className="error-card">
          <h3>{error}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="users-page">
      <h2>👥 User Directory</h2>

      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p> {user.email}</p>
            <p> {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchUsers;

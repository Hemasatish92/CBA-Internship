function Profile({ setIsLoggedIn }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>👤 Profile Page</h2>
        <p>Welcome back!</p>

        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;

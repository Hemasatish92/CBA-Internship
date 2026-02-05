function UserProfile(props) {
  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

export default UserProfile;

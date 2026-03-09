import React from "react";

class UsersClass extends React.Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data,
          loading: false
        });
      });
  }

  componentWillUnmount() {
    console.log("Cleanup before unmount");
  }

  render() {
    if (this.state.loading) {
      return <p>Loading users...</p>;
    }

    return (
      <ul className="center-list">
        {this.state.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UsersClass;

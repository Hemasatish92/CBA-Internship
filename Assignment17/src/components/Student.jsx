import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Course: {this.props.course}</p>
      </div>
    );
  }
}

export default Student;

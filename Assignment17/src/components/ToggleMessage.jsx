import React from "react";

class ToggleMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  toggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        {this.state.isVisible && <p>Hello! This is a toggle message.</p>}
        <button onClick={this.toggle}>Toggle Message</button>
      </div>
    );
  }
}

export default ToggleMessage;

import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <h3>Current Time: {this.state.time}</h3>;
  }
}

export default Timer;

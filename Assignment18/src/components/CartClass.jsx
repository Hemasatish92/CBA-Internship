import React from "react";

class CartClass extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h3>Cart (Class)</h3>
        <p>Quantity: {this.state.count}</p>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default CartClass;

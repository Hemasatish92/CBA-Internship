import { useState } from "react";

function CartFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Cart (Function)</h3>
      <p>Quantity: {count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>

      <button
        onClick={() => count > 0 && setCount(count - 1)}
      >
        -
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CartFunction;

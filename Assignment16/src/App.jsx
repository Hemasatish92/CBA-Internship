import Message from "./components/Message";
import Card from "./components/Card";
import LoginStatus from "./components/Login";

function App() {
  const name = "Hema";
  const age = 21;
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      {/* Question 1: Name and Age */}
      <div>
        <h1>Hello, {name}</h1>
        <p>You are {age} years old</p>
        <hr />
      </div>

      {/* Question 2: Age condition */}
      <div>
        {age >= 18 ? (
          <p>You are an adult</p>
        ) : (
          <p>You are a minor</p>
        )}
        <hr />
      </div>

      {/* Question 3: Array list */}
      <div>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <hr />
      </div>

      {/* Question 4: Arrow function component */}
      <div>
        <Message />
        <hr />
      </div>

      {/* Question 5: Props */}
      <div>
        <Card
          title="React"
          description="React is a JavaScript library"
        />
        <hr />
      </div>

      {/* Question 6: Boolean condition */}
      <div>
        <LoginStatus isLoggedIn={true} />
        <hr />
      </div>
    </div>
  );
}

export default App;

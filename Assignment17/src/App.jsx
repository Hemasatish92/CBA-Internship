import Welcome from "./components/Welcome";
import Student from "./components/Student";
import Counter from "./components/Counter";
import ToggleMessage from "./components/ToggleMessage";
import Timer from "./components/Timer";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Welcome />

      <hr />

      <Student name="Hema" course="React" />
      <Student name="Anu" course="JavaScript" />

      <hr />

      <Counter />

      <hr />

      <ToggleMessage />

      <hr />

      <Timer />
    </div>
  );
}

export default App;

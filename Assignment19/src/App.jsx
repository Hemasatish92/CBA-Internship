import RegisterForm from "./components/RegisterForm";
import LoginRole from "./components/LoginRole";
import FeedbackForm from "./components/FeedBackForm";
import ShowHidePassword from "./components/ShowHiddenPassword";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <div style={{ textAlign: "center"}}>
      <RegisterForm />
      <hr />
      <LoginRole />
      <hr />
      <FeedbackForm />
      <hr />
      <ShowHidePassword />
      <hr />
      <MultiStepForm />
    </div>
  );
}

export default App;

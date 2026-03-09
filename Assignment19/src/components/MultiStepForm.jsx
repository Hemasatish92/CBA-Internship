import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSkillChange = (skill) => {
    setSkills(
      skills.includes(skill)
        ? skills.filter((s) => s !== skill)
        : [...skills, skill]
    );
  };

  if (submitted) {
    return (
      <div>
        <h3>Summary</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Experience: {experience}</p>
        <p>Skills: {skills.join(", ")}</p>
      </div>
    );
  }

  return (
    <div>
      {step === 1 && (
        <div>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
          <button disabled={!name || !email} onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <select onChange={(e) => setExperience(e.target.value)}>
            <option value="">Select Experience</option>
            <option>Fresher</option>
            <option>1–3 Years</option>
            <option>3+ Years</option>
          </select><br />

          <label>
            <input type="checkbox" onChange={() => handleSkillChange("React")} />
            React
          </label>

          <label>
            <input type="checkbox" onChange={() => handleSkillChange("JavaScript")} />
            JavaScript
          </label><br />

          <button onClick={() => setSubmitted(true)}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;

import { useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className="theme-page"
      style={{
        background: dark ? "#0f172a" : "#f4f6f8",
        color: dark ? "white" : "#1e293b",
      }}
    >
      <div className="theme-card">
        <h2>{dark ? "🌙 Dark Mode" : "☀ Light Mode"}</h2>

        <p>
          Experience a clean dynamic theme using React state and inline styling.
        </p>

        <button onClick={() => setDark(!dark)}>
          {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Theme;

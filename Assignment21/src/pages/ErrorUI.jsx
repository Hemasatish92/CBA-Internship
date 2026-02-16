import { useState } from "react";

function ErrorUI() {
  const [error, setError] = useState(true);

  return (
    <div className="center-page">

      {error ? (
        <div className="error-card">
          <h2>⚠ Something Went Wrong</h2>
          <p>We couldn't load the data.</p>

          <button onClick={() => setError(false)}>
            🔄 Retry
          </button>
        </div>
      ) : (
        <div className="success-card">
          <h2>✅ Data Loaded Successfully</h2>
          <p>Everything is working perfectly 🎉</p>
        </div>
      )}

    </div>
  );
}

export default ErrorUI;

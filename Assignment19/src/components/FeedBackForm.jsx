import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const limit = 100;

  if (submitted) {
    return <h3>Thank you for your feedback</h3>;
  }

  return (
    <div>
      <h3>Feedback</h3>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <p>{feedback.length} / {limit}</p>

      {feedback.length > limit && (
        <p style={{ color: "red" }}>Character limit exceeded</p>
      )}

      <button
        disabled={feedback.length > limit}
        onClick={() => setSubmitted(true)}
      >
        Submit
      </button>
    </div>
  );
}

export default FeedbackForm;

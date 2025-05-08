import React from "react";
import { useNavigate } from "react-router-dom";

function ResultPage({ action, value, count }) {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>User {action} {value}</h2>
      <h3>Current Total: {count}</h3>
      <button onClick={() => navigate("/")} style={{ marginTop: "30px", fontSize: "20px" }}>
      ⬅️Back
      </button>
    </div>
  );
}

export default ResultPage;

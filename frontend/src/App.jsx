import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth("Backend Unreachable"));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>DevOps Interview Lab 🚀</h1>
      <h2>Backend Status: {health}</h2>
    </div>
  );
}

export default App;
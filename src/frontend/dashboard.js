import React, { useState } from "react";

function Dashboard() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const runExperiment = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/run-experiment");
      const data = await response.json();

      setResults(data.results);
    } catch (error) {
      console.error("Experiment failed", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>RAG Chunking Experiment Dashboard</h1>

      <button
        onClick={runExperiment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginBottom: "30px",
          cursor: "pointer"
        }}
      >
        {loading ? "Running..." : "Run Experiment"}
      </button>

      <h2>Results</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Chunk Size</th>
            <th>Top-1 Accuracy</th>
          </tr>
        </thead>

        <tbody>
          {results.map((r, index) => (
            <tr key={index}>
              <td>{r.chunkSize}</td>
              <td>{(r.accuracy * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
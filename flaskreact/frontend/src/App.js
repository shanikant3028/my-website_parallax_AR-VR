import React, { useState } from "react";

function App() {
  const [filename, setFilename] = useState("");
  const [data, setData] = useState([]);

  const loadCSV = async () => {
    console.log("clicked");   // debug

    try {
      const res = await fetch("http://127.0.0.1:5000/csv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ filename })
      });

      console.log("response:", res);

      const result = await res.json();
      console.log("data:", result);

      setData(result);

    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📊 CSV Viewer</h2>

        <input
          style={styles.input}
          placeholder="Enter CSV filename (e.g. data1.csv)"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />

        <button style={styles.button} onClick={loadCSV}>
          Load CSV
        </button>

        <div style={styles.tableContainer}>
          {data.length > 0 && (
            <table style={styles.table}>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key} style={styles.th}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).map((val, j) => (
                      <td key={j} style={styles.td}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(270deg, #4facfe, #00f2fe)"
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    background: "#fff",
    width: "80%",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
  },
  input: {
    padding: "10px",
    margin: "10px",
    width: "60%",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  tableContainer: {
    marginTop: "20px",
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    background: "#007bff",
    color: "#fff"
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px"
  }
};

export default App;
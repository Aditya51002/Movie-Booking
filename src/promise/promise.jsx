import React, { useState, useEffect } from "react";

const PromiseExample = () => {
  const [status, setStatus] = useState("Pending...");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error: Failed to fetch data.");
        }
      }, 2000);
    });

    fetchData
      .then((response) => {
        setStatus("Fulfilled");
        setData(response);
      })
      .catch((error) => {
        setStatus("Rejected");
        setData(error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Promise Implementation</h1>
      <p><strong>Status:</strong> {status}</p>
      {data && <p><strong>Result:</strong> {data}</p>}
    </div>
  );
};

export default PromiseExample;

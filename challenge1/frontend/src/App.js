import React, { useState } from "react";
import './App.css';

function App() {
  const baseURL = "http://localhost:3300/api";

  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function getAllData() {
    try {
      const res = await fetch(`${baseURL}/company`);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        length: res.headers.get("Content-Length"),
        data: data,
      };
      setGetResult(fortmatResponse(result));
    } catch (err) {
      setGetResult(err.message);
    }
  }

  const clearGetOutput = () => {
    setGetResult(null);
  }

  return (
    <div id="app" className="container my-3">
      <h3>Challenge 1 FETCH DATA</h3>

      <div className="card mt-3">
        <div className="card-header">Hussain Ghazali</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
            <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
          </div>   
          { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
        </div>
      </div>
    </div>
  );
}

export default App;
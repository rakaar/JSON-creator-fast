import React, { useState } from "react";
import "./App.css";
import { parse } from "./createjson";

function App() {
  const [output, setOutput] = useState(``);
  function handleChange(e) {
    const json = parse(e.target.value);
    setOutput(json);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="space">
          <h2>Create JSONs</h2>
          <ul>
            <li>str name => "name": "string"</li>
            <li>num age => "age": 7</li>
            <li>bool is_minor => "is_minor": 1</li>
            <li>
              obj sample_obj str name num age => "sample_obj":{" "}
              {`{ "name": "string", "age": 7 }`}
            </li>
          </ul>
          <textarea rows="10" cols="100" onChange={handleChange} />
          <br />
          <textarea rows="20" cols="100" value={output} />
        </div>
      </header>
    </div>
  );
}

export default App;

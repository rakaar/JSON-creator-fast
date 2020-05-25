import React, { useState } from "react";
import "./App.css";
import { parse } from "./createjson";

function App() {
  const [output, setOutput] = useState(``);
  function handleChange(e) {
    if(e.target.value === ``)
      localStorage.clear()
    const json = parse(e.target.value);
    setOutput(json);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="space">
          <h2>Create JSONs quickly <a href="https://github.com/rakaar/JSON-creator-fast">(Code)</a></h2>
          <iframe src="https://youtube.com/embed/Yh1UFCJ9KFE" width="800" height="400"></iframe>
          <br />
         
          <textarea rows="10" cols="100" onChange={handleChange} />
          <br />
          <textarea rows="20" cols="100" value={output} />
        </div>
      </header>
    </div>
  );
}

export default App;

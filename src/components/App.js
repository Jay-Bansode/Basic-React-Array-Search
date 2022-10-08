import React, { useState } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta",
];
const App = () => {
  const [searchWords, setSearchWords] = useState("");
  const [showResult, setShowResult] = useState(false);

  const searchHandler = (e) => {
    setSearchWords(e.target.value);
    if (e.target.value.trim() !== "") {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  };
  const showData = searchArray.map((item, index) => {
    if (item.toLowerCase().includes(searchWords.toLowerCase())) {
      return <li key={index}>{showResult && item}</li>;
    }
  });

  return (
    <div id="main">
      <label htmlFor="search-input">Search</label>
      <br />
      <input id="search-input" type="text" onChange={searchHandler} />
      <p>Result</p>
      <ul id="results-holder">{showResult && showData}</ul>
    </div>
  );
};

export default App;

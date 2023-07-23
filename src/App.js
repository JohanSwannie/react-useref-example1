import React, { useState, useRef } from "react";

const sportList = [
  "Tennis",
  "Bowls",
  "Football",
  "Table tennis",
  "Netball",
  "Rugby",
  "Swimming",
  "Gymnastics",
];

function App() {
  const [sportNames, setSportNames] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const reffy = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sportList.includes(reffy.current.value)) {
      setSportNames([...sportNames, reffy.current.value]);
      setErrorMsg("");
    } else {
      setErrorMsg("Oh no Mate - Wrong value!!!");
    }
    reffy.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={reffy} />
      </form>
      <ul>
        {sportNames.map((sport, index) => (
          <li key={index}>{sport}</li>
        ))}
      </ul>
      <p style={{ color: "crimson", marginTop: "3rem" }}>{errorMsg}</p>
    </div>
  );
}

export default App;

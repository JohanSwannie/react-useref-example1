import React, { useState, useRef } from "react";

const sportList = [
  "tennis",
  "bowls",
  "football",
  "table tennis",
  "netball",
  "rugby",
  "swimming",
  "gymnastics",
  "cricket",
];

function App() {
  const [sportNames, setSportNames] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const reffy = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sportList.includes(reffy.current.value.toLowerCase())) {
      if (sportNames.includes(reffy.current.value.toLowerCase())) {
        setErrorMsg(`Try again - You have already chosen that sport`);
      } else {
        setSportNames([...sportNames, reffy.current.value.toLowerCase()]);
        setErrorMsg("");
      }
    } else {
      setErrorMsg(
        `Oh no Mate - Wrong Sport! - The club only have the following sports available : ${sportList}`
      );
    }
    reffy.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your sport of choice: <input type="text" ref={reffy} />
        </label>
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

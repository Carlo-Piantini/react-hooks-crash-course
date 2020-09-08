import React from "react";
import Navbar from "./Navbar";
import Greeter from "./Greeter";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Greeter name="Carlo" age="28" excitment={4}></Greeter>
      <Greeter name="Mally" excitment={9}></Greeter>
    </div>
  );
}

export default App;

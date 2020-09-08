import React from "react";

function Greeter({ name, age = 25, excitment = 1 }) {
  return (
    <div>
      <h1>
        Hi there, {name}
        {"!".repeat(excitment)}
      </h1>
      <p>You are {age} years old</p>
      <button onClick={() => alert("Hello")}>Click Me!</button>
    </div>
  );
}

export default Greeter;

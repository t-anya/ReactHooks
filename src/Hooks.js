import React, { useState, useEffect } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  useEffect(() => {
    console.log("1. You clicked " + count + " times");
    console.log("2. You clicked " + count2 + " times");
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 10)}>Click me</button>
    </div>
  );
}

export default Hooks;

//here , count -> update so useEffect will get called,
//count2, updations, no hook call

import React, { useState, useMemo } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // Words we can flip through and view letter count
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];

  const computeLetterCount = word => {
    let i = 0;
    while (i < 10000) i++;
    return word.length;
  };

  // Memoize computeLetterCount so it uses cached return value if input array ...
  // ... values are the same as last time the function was run.
  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  // This would result in lag when incrementing the counter because ...
  // ... we'd have to wait for expensive function when re-rendering.
  //const letterCount = computeLetterCount(word);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Compute number of letters (slow 🐌)</h2>
      <p>
        "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>

      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemoHook;

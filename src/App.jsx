import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function reset() {
    setCount(0);
    setSteps(1);
  }

  return (
    <div className="container">
      <div>
        <button
          className="count-btn"
          onClick={() => setCount((c) => c - steps)}
        >
          ➖
        </button>
        <span className="count-text"> count: {count} </span>
        <button
          className="count-btn"
          onClick={() => setCount((c) => c + steps)}
        >
          ➕
        </button>

        <div>
          <button className="steps-btn" onClick={() => setSteps((c) => c - 1)}>
            ➖
          </button>
          <span className="count-text"> step: {steps} </span>
          <button className="steps-btn" onClick={() => setSteps((c) => c + 1)}>
            ➕
          </button>
        </div>
        <p>
          <span className="date-text">
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}{" "}
          </span>
          <span className="date-text">{date.toDateString()}</span>
        </p>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

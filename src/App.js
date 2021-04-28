import { useState } from 'react';
import classNames from "classnames";
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  const counterClass = classNames({
    "positive": count > 0,
    "negative": count < 0
  });

  return (
   <div className="app">
     <h1 data-testid="header">Click Counter App</h1>
     <h1 className={counterClass} data-testid="counter">{count}</h1>
     <div className="button__wrapper">
      <button onClick={() => setCount(count - 1)} data-testid="subtract-btn">
        -
      </button>
      <button onClick={() => setCount(count + 1)} data-testid="add-btn">
        +
      </button>
     </div>
   </div>
  );
}

export default App;
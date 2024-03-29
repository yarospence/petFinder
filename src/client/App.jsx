import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pet Finder</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click Me {count}
        </button>
        <p>
         Pet Finder using express.
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </div>
  );
}

export default App;

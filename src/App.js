import './App.css'
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
<em>Open-sourced. Created by Adrienne Lao</em>        </a>

      </header>
    </div>
  );
}

export default App;

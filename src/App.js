import React from "react";
import "./App.css";
import Photopage from './Photopage';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>NASA APOD!</h1>
      <h3>NASA Astronomy Photo of the Day</h3>
      <h5>A different one every day!</h5>

      <Photopage />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Photopage from './Photopage';
import styled from 'styled-components';

const Topdiv = styled.div`
  background-color: darkgrey;
`
const Different = styled.h5`
  text-decoration: underline;
  font-size: 1rem;
  // color: green;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
`;

function App() {
  return (
    <Topdiv className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>NASA APOD!</h1>
      <h3>NASA Astronomy Photo of the Day</h3>
      <Different>A different one every day!</Different>

      <Photopage />
    </Topdiv>
  );
}
export default App;

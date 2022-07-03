import React from "react";
import "./App.css"
import SlotM from "./Components/slotMachine";


const App = () => {
  return (
    <>
      <h1 className="heading">Welcome to <span style={{ fontweight: "bold" }}>slot machine game</span></h1>
      <div className="slotmachine">
      <SlotM  x='smile' y='smile' z='smile'/>
      <SlotM  x = 'smiley' y='smiley' z= 'smiley'/>
      <SlotM x='hello' y='hello' z='hi'/>
      </div>
    </>
  )
};

export default App;
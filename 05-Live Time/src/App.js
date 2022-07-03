import React, { useState } from "react";
import "./App.css"

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ currTime , setCurrTime ]= useState(time);

  const Fun1 = () =>{
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };

  setInterval(Fun1,1000);
  return (
    <div >
      <h1>{currTime}</h1>
    </div>
  );
  }
export default App;
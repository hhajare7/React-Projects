import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [count, setCount] = useState(0);

  const incItem = () => {
    setCount(count + 1);
  };
  
  const decItem= ()=>{
    if(count>0){
    setCount(count-1);
    }else {
      alert("Wrong values");
    };

  };

  return (
    <>
      <div className="main">
        <h1 > {count} </h1>
        <button className="one" onClick={incItem}>Increment</button>
        <button className="two" onClick={decItem}>Decrement</button>
      </div>
    </>
  );
}
export default App;
import React, {useState} from "react";
import "./App.css";

const App = () => {
  const color="blue";
  const[bg,setBg] =useState(color);

  const [name,setName]=useState('Click Me');


  const  bgChnage = () => {
    let newBg="gray";
    setBg(newBg);
    setName('OUCH');
  };

  return (
    <>
      <div style={{ backgoundColor: bg }}>
        <button className="btn" onClick={bgChnage}> {name} </button>
      </div>

    </>
  )
}

export default App;
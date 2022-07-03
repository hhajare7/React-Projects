import React from "react";


const Calculator =()=>{
    const add=(a,b)=> {return a+b;}
    const sub=(a,b)=> {return a-b;}
    const mult=(a,b)=> {return a*b;}
    const div=(a,b)=> {return a/b;}

return(
    <div>
    <ul>
  <li>Sum of two numbers is {add(40,3)}</li>
  <li>Sub of two numbers is {sub(40,3)}</li>
  <li>Multi of two numbers is {mult(40,3)}</li>
  <li>Div of two numbers is {div(40,3).toFixed(2)}</li>
</ul>
</div>
);
}
export default Calculator;
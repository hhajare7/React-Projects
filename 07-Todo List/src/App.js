import React from "react";
import { useState } from "react";
import "./App.css"
import ToDoList from "./ToDoList";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };
  const listItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index!==id;
      })
    })
  }

    return (
      <>
        <div className="main">
          <div className="center">
            <br />
            <h1>TO - DO List</h1>
            <br />
            <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent} />
            <button onClick={listItem}> + </button>

            <ol>
              {/* <li>{inputList}</li> */}

              {
                items.map((itemval, index) => {
                  return <ToDoList
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                  />
                })
              }
            </ol>

          </div>
        </div>
      </>
    );
  }

  export default App;
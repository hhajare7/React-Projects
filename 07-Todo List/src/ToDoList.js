import React from "react";
import './ToDoList.css'
const ToDoList = (props) => {




    return (
        <>
            <div className="style">
                <i className="fa-fa-times" 
                aria-hidden="true" 
                onClick={()=>{
                    props.onSelect(props.id);
                }}
                >

                </i>


                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoList;
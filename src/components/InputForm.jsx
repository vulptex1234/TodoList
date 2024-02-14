import React from 'react'
import {useState} from "react";

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        /*inputに打ち込んだ内容を出力*/
        console.log(inputText)

        /* add a task */
        setTaskList([
            ...taskList, 
            {
                text: inputText
            }
        ]);
        console.log(taskList);
        
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
        
    }

  return (
    <div className = "InputForm">
        <form onSubmit={handleSubmit}>
            <input type = "text" onChange={handleChange}/>
            <button>
            <i className="fas fa-plus-square"></i>
            </button>
        </form>
    </div>
  )
}

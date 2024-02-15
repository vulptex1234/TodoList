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
                id: taskList.length,
                text: inputText,
                completed: false
            }
        ]);
        // console.log(taskList);
        /* delete input texts */
        setInputText("")
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
        
    }

  return (
    <div className = "InputForm">
        <form onSubmit={handleSubmit}>
            <input type = "text" onChange={handleChange} value={inputText}/>
            <button>
            <i className="fas fa-plus-square"></i>
            </button>
        </form>
    </div>
  )
}

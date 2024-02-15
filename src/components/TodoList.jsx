import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {

    const handleDelete = (id) => {
        /* delete task */
        setTaskList(taskList.filter((task) => task.id !== id))
    }

  return (
    <div className='todoList'>
        <div className="todos">
            {taskList.map((task, index) => (
            <div className='todo' key={index}>
                <div className="todoText">
                    <span>{task.text}</span>
                </div> 
                <div className="icons">
                    <button>
                    <i className="fas fa-check"></i>
                    </button>
                    <button onClick={() => handleDelete(task.id)}>
                    <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

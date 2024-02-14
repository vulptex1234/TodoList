import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {
  return (
    <div className='todoList'>
        <div className="todos">
            <div className='todo'>
                <div className="todoText">
                    <span>programming</span>
                </div> 
                <div className="icons">
                    <button>
                    <i className="fas fa-check"></i>
                    </button>
                    <button>
                    <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

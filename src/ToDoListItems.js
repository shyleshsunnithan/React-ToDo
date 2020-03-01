import React from 'react'


const ToDoListItems = (props) =>{
    return(
        <div>
            <input type='checkbox' checked={props.completed}></input>
            <span>{props.title}</span>
            <button>Delete Todo</button>
        </div>
    )
}

export default ToDoListItems
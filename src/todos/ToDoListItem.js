import React from 'react'
import "./ToDoListItem.css"

const ToDoListItem = ({todo}) => (
    <div className="todo-item-container">
        <hr></hr>
        <h3>{todo.text}</h3>
        <div className="button-container">
            <button className="completed-button">Mark As Completed</button>
            <button className="remove-button">Remove</button>
        </div>

    </div>
)

export default ToDoListItem
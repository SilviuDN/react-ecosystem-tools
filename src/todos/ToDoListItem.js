import React from 'react'
import "./ToDoListItem.css"

const ToDoListItem = ({todo, onRemovePressed, onCompletePressed}) => (
    <div className="todo-item-container">
        <hr></hr>
        <h3>{todo.text}</h3>
        <div className="button-container">
            {
                todo.isCompleted
                ?
                null
                :
                <button className="completed-button"
                    onClick = { () => onCompletePressed(todo.id)}>
                    Mark As Completed
                </button>
            }
            <button 
                onClick = { () => onRemovePressed(todo.id)}
                className="remove-button">
                Remove
            </button>
        </div>

    </div>
)

export default ToDoListItem
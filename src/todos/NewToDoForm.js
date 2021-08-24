import React, {useState} from 'react'
import "./NewToDoForm.css"

const NewToDoForm = () => {
    const [inputValue, setInputValue] = useState('')
    return(    
    <div className="new-todo-form">
        <input 
            className="new-todo-input" 
            type="text"
            placeholder = "type new todo here..."
            value = {inputValue}
            onChange = { e => setInputValue( e.target.value )}
        />
        <button className="new-todo-button">Create To Do</button>
    </div>
    )
}

export default NewToDoForm
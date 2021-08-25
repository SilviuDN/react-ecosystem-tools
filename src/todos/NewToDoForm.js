import React, {useState} from 'react'
import { addTodoRequest } from './thunks';
import {connect} from 'react-redux' //connect is a higher order function -> 2 diff sets of arguments : connect()(componentToConnectToReduxStore)
import { getTodos, getTodosLoading } from './selectors';
import "./NewToDoForm.css"

const NewToDoForm = ({todos, onCreatePressed}) => {
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
        <button 
            onClick = {() => {
                const isDuplicateText = 
                    todos.some(todo => todo.text === inputValue)
                    if( !isDuplicateText){
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }

            }}
            className="new-todo-button">
            Create To Do
        </button>
    </div>
    )
}

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

// exporting the connected version of this component
export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm) 
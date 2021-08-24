import React from 'react'
import {connect} from 'react-redux'
import {removeTodo, completedTodo} from './actions'
import ToDoListItem from './ToDoListItem'
import NewToDoForm from './NewToDoForm'
import "./ToDoList.css"

const ToDoList = ({todos =[], onRemovePressed, onCompletePressed}) => (
    <div className="list-wrapper">
        <NewToDoForm/>
        {todos.map( todo => <ToDoListItem 
            todo = {todo} 
            onRemovePressed = {onRemovePressed}
            onCompletePressed = {onCompletePressed}
        />)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completedTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList) 
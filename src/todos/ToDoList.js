import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from './actions'
import ToDoListItem from './ToDoListItem'
import NewToDoForm from './NewToDoForm'
import "./ToDoList.css"

const ToDoList = ({todos =[], onRemovePressed}) => (
    <div className="list-wrapper">
        <NewToDoForm/>
        {todos.map( todo => <ToDoListItem todo = {todo} onRemovePressed = {onRemovePressed}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList) 
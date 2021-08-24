import React from 'react'
import ToDoListItem from './ToDoListItem'
import NewToDoForm from './NewToDoForm'
import "./ToDoList.css"

const ToDoList = ({todos =[ { text: 'Hello!'} ]}) => (
    <div className="list-wrapper">
        <NewToDoForm/>
        {todos.map( todo => <ToDoListItem todo = {todo}/>)}
    </div>
)

export default ToDoList
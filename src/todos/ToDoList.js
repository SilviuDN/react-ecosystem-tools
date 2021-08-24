import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { completedTodo} from './actions'
import {displayAlert} from './thunks'
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import ToDoListItem from './ToDoListItem'
import NewToDoForm from './NewToDoForm'
import "./ToDoList.css"

const ToDoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewToDoForm />
            {todos.map(todo => <ToDoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

// const ToDoList = ({todos =[], onRemovePressed, onCompletePressed}) => (
//     <div className="list-wrapper">
//         <NewToDoForm/>
//         {todos.map( todo => <ToDoListItem 
//             todo = {todo} 
//             onRemovePressed = {onRemovePressed}
//             onCompletePressed = {onCompletePressed}
//         />)}
//     </div>
// )

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList) 
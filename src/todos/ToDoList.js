import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';
import { completedTodo} from './actions'
import {displayAlert} from './thunks'
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import ToDoListItem from './ToDoListItem'
import { 
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
 } from './selectors';
import NewToDoForm from './NewToDoForm'

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const ToDoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <ListWrapper>
            <NewToDoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => <ToDoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}/>)}
            <h3>Completed:</h3>
            {completedTodos.map(todo => <ToDoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}/>)}
        </ListWrapper>

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
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList) 

            {/* {todos.map(todo => <ToDoListItem
                todo={todo}
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}/>)}
        </div> */}
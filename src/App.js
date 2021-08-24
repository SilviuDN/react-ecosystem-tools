import React from 'react';
import './App.css';
import {hot} from 'react-hot-loader'
import ToDoList from './todos/ToDoList';

const App = () => (
    <div className="App">
        <ToDoList/>
    </div>
);

export default hot(module)(App) ;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodosList';

const todos = [
    {
        key: 0,
        task: 'make react app',
        isCompleted: false
    },
    {
        key: 1,
        task: 'make react apps',
        isCompleted: false
    }
];

const content = todos.map((todo) =>
    <div key={todo.key}>
        <h3>{todo.task}</h3>
        <p>{todo.isCompleted}</p>
    </div>
);

class Todo extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {content.map(function(task, isCompleted){
                        return <li key={ task.key }>{task}</li>
                    })}
                </ul>

            </div>
        );
    }
}

export default Todo;

if (document.getElementById('output')) {
    ReactDOM.render(<Todo/>, document.getElementById('output'));
}
import React, { Component } from 'react';
import Todo from './Todo';

export default class TodosList extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    <Todo test="test"/>
                </h1>
            </div>
        )
    }
}
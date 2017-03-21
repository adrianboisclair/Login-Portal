import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// create store
const store = createStore();
// Data stored in the store is determined by Reducers
ReactDOM.render(<h1>Hey it's working!</h1>, document.getElementById('root'));
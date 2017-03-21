
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Include React Components
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';
import Home from './pages/Home';

const store = createStore(allReducers);
const app = document.getElementById('root');
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
const element = <Welcome name="Adrian" />;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
app);
ReactDOM.render(element, document.getElementById('tempContainer'));
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {
    render() {
        return (
            <div>
                <h1 style={exampleStyle}>Cool, it's working</h1>
            </div>
        );
    }
}

export default Example;

const exampleStyle = {
    color: 'blue',
    display: 'inline'
};

if (document.getElementById('output')) {
    ReactDOM.render(<Example />, document.getElementById('output'));
}
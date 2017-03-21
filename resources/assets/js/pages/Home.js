import React from 'react';
import Ajax from '../components/Ajax';

export default class Home extends React.Component {
    title = 'Home';
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
            </div>
        );
    }
}

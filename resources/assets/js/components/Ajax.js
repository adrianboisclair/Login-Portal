import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'


class Ajax extends Component {
    render() {
        return (
            <div>
                <h1>Ajax</h1>
            </div>
        );
    }
}
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles,US&APPID=0c45c8c08ae88f19023bf1f03db86488';
let tempResponse;
class GetWeatherData extends Component {
    render() {
        this.getWeather();
        return(
            <div>
                {tempResponse}
            </div>
        );
    }
    getWeather() {
        return axios.get(url).then( response => {
            tempResponse = this.constructor.convertTemp(response.data.main.temp, true);
        });
    }
    static convertTemp(k, roundUp = false) {
        let val = k * 9 / 5 - 459.67;
        if(!roundUp) {
            return val;
        }
        return Math.round(val);
    }
}

if (document.getElementById('ajax')) {
    ReactDOM.render(<GetWeatherData/>, document.getElementById('ajax'));
}

export default GetWeatherData;

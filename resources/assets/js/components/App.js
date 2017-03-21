import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reports';

const appStyle = {
    border: "1px solid lightgray"
};
const notFound = () => {
    return (<div>Not Found</div>);
};
const App = () => {
    return(
        <div className="col-sm-12" style={appStyle}>
            router:
            <Router>
                <switch>
                    <nav>
                        <Link to={'home'}><button className="btn btn-default">Home</button></Link>
                        <Link to={'reports'}><button className="btn btn-default">Reports</button></Link>
                    </nav>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/reports" component={Reports}/>
                </switch>
            </Router>
            <div id="tempContainer"></div>
        </div>
    )
};


export default App;
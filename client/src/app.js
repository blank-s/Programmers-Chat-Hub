import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const container = {
    height: "100%"
};

const appStyle = {
    height: "100%",
    width: "100%",
};

const App = () => {

    return (
        <div className="container" style={ container }>
        <div 
        style={ appStyle }
        className="d-flex justify-content-center align-items-center">
        <Router>
            <Switch>
                <Route exact path="/" component={ Join }/>
                <Route path="/chat" component={ Chat }/>
            </Switch>
        </Router>
        </div>
        </div>
    );
};

export default App;
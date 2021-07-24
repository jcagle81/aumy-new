import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Aumy from './pages/aumy'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch> 
            <Switch>
                <Route path="/aumy" component={Aumy} exact />
            </Switch> 
        </Router>
    );
}

export default App;
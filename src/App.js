import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Aumy from './pages/aumy';
import Kinder from './pages/kinderclass';
import Junior from './pages/juniorclass';
import Senior from './pages/seniorclass';
import ClassesPage from './pages/classes';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch> 
            <Switch>
                <Route path="/aumy" component={Aumy} exact />
            </Switch> 
            <Switch>
                <Route path="/kinder" component={Kinder} exact />
            </Switch> 
            <Switch>
                <Route path="/junior" component={Junior} exact />
            </Switch> 
            <Switch>
                <Route path="/senior" component={Senior} exact />
            </Switch> 
            <Switch>
                <Route path="/classes" component={ClassesPage} exact />
            </Switch> 
        </Router>
    );
}

export default App;
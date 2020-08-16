import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

export default function Routes() {
    return (
        <React.Fragment>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/about" exact component={About} />
        </React.Fragment>
    )
}
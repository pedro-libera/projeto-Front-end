import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';

export default function Routes() {
    return(
        <React.Fragment>
            <BrowserRouter>
                <Route path="/" exact component={Landing}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
            </BrowserRouter>
        </React.Fragment>
    )
}
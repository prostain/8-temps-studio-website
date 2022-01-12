import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from '../modules/auth/login/Login';
import Register from '../modules/auth/register/Register';
import LandingPage from '../modules/home/LandingPage';
import Profile from '../modules/profile/Profile';
import PrivateRoute from './PrivateRoute';

export default class Router8T extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/home' component={LandingPage}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <PrivateRoute exact path='/profile' component={Profile}/>
                </Switch>
            </Router>
        )
    }
}

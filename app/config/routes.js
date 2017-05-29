import React, { Component } from 'react';
import Index from '../components/index';
import Login from '../components/loginpage';
import Posts from '../components/loadposts';
import {Route, IndexRoute} from 'react-router';

module.exports = (
    <Route path="/" component={Index}>
        <Route path="Posts" component={Posts} />
        <IndexRoute component={Login} />
    </Route>
)
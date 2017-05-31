import React, { Component } from 'react';
import Index from '../components/index';
import Login from '../components/loginPage';
import Posts from '../components/loadPostsPage';
import {Route, IndexRoute} from 'react-router';

module.exports = (
    <Route path="/" component={Index}>
        <Route path="posts" component={Posts} />
        <IndexRoute component={Login} />
    </Route>
)
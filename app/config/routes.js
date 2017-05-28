import React, { Component } from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Posts from '../components/Posts';
import {Route, IndexRoute} from 'react-router';

module.exports = (
    <Route path="/" component={Main}>
        <Route path="Posts" component={Posts} />
        <IndexRoute component={Home} />
    </Route>
)
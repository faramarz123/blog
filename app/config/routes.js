import React, { Component } from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import {Router, Route} from 'react-router';

class routes extends Component{
    render(){
        return (
                <Route path="/" component={Main}>
                </Route>
        )}
}
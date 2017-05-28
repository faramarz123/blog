import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';
import roures from './config/routes';

ReactDOM.render(
    <Router>{routes}</Router>, document.getElementById('app')
)
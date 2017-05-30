import React, { Component } from 'react';
import Footer from './footer';
import { browserHistory } from 'react-router';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import Header from './header';

class Index extends Component{

    constructor()
    {
        super();
        this.logout = this.logout.bind(this);
        this.state={shouldBeHidden: false}
    }

    logout(e)
    {
        e.preventDefault();
        eraseCookie('token');
        browserHistory.push('/');
        console.log('token is erased. ');
    }
    render(){
        return (
            <div className="container">
                    <Header />
                    {this.props.children}
                    <Footer />
            </div>
        )}
}

export default Index;
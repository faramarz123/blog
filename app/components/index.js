import React, { Component } from 'react';
import Footer from './footer';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import Header from './header';

class Index extends Component{

    constructor()
    {
        super();
        // this.logout = this.logout.bind(this);
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
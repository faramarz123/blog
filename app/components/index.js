import React, { Component } from 'react';
import Footer from './footer';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';

class Index extends Component{

    constructor()
    {
        super();
        this.logout = this.logout.bind(this);
    }

    logout()
    {
        eraseCookie('token');
        console.log('token is erased. ');
    }
    render(){
        return (
                <div className="main-container">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="col-md-7 col-md-offset-2 text-center" style={{marginTop: 5,}}>
                            <h1>بلاگ</h1>
                        </div> 
                        {/*<button onClick={this.logout} className="btn">Logout</button>   */}
                    </nav>
                    <div className="container">
                        {this.props.children}
                        
                        <Footer />
                    </div>
                </div>
                
        )}
}

export default Index;
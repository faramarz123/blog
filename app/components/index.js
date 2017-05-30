import React, { Component } from 'react';
import Footer from './footer';
import { browserHistory } from 'react-router';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';

class Index extends Component{

    constructor()
    {
        super();
        this.logout = this.logout.bind(this);
        this.state={shouldBeHidden: true}
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
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="col-md-12 text-center float-left" style={{marginTop: 5,}}>
                            {/*{this.state.shouldBeHidden ? <div className="col-md-3"><button id="logoutButton" onClick={this.logout} className="btn">خروج</button></div> : null}*/}
                            <div className="col-md-9"><h1>بلاگ</h1></div>
                        </div>
                    </nav>

                    <div className="row">
                          {this.props.children}
                    </div>

                    <div>
                        <Footer />
                    </div>
            </div>
        )}
}

export default Index;
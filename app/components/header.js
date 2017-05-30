import React,{Component} from 'react';
import { browserHistory } from 'react-router';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';

class Header extends Component
{
    constructor()
    {
        super();
        this.state={shouldBeHidden: false}
        this.logout = this.logout.bind(this);
    }

    //logout button event handler
    logout(e)
    {
        e.preventDefault();
        eraseCookie('token');
        browserHistory.push('/');
    }

    render()
    {
        return(
            <nav className="navbar navbar-default" role="navigation">
                <div className="col-md-12 text-center float-left" style={{marginTop: 5,}}>
                        <div className="col-md-2">{readCookie('token') ? <button id="logoutButton" onClick={this.logout} className="btn">خروج</button> : null}</div>
                        <div className="col-md-10"><h1>بلاگ</h1></div>
                </div>
            </nav>
        )
    }
}

export default Header;
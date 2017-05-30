import React,{Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';

class Header extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-default" role="navigation">
                <div className="col-md-12 text-center float-left" style={{marginTop: 5,}}>
                        {!readCookie('token') ? <div className="col-md-3"><button id="logoutButton" onClick={this.logout} className="btn">خروج</button></div> : null}
                        <div className="col-md-9"><h1>بلاگ</h1></div>
                </div>
            </nav>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';

//login component
class Login extends Component
{
        constructor(props) {
            super(props);
            this.state = {token: '', usernamevalue: '', passwordvalue: ''};
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleUsername = this.handleUsername.bind(this);
            this.handlePassword = this.handlePassword.bind(this);
            if(readCookie('token'))
            {
                browserHistory.push('/posts');
            }
        }
        handleUsername(event)
        {
            this.setState({usernamevalue: event.target.value});
        }
         handlePassword(event)
        {
            this.setState({passwordvalue: event.target.value});
        }
        handleSubmit(event)
        {
            //http request to login. If succeed to login, then, redirect to posts 
            fetch('https://ancient-bayou-43826.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.usernamevalue,
                password: this.state.passwordvalue
            }),
            headers: {
                    'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then(res => createCookie('token', res.token, 1))
            .then(() => browserHistory.push('/Posts'))
            .catch(console.warn)
            event.preventDefault();
            
        }
        render()
        {
            //render login form
            return(
                <form dir="rtl" onSubmit={this.handleSubmit}>
                 <h2>ورود به سیستم</h2><br/>
                 <label>
                 نام کاربری:
                 </label>   
                        <input type="text" name="name"  onChange={this.handleUsername}/>
                 <br />
                 <label>
                 رمز ورود:
                 </label>
                        <input type="password" name="password"  onChange={this.handlePassword} />
                 
                 <input type="submit" value="ورود"  />
            </form>
        )
    }
}

export default Login;
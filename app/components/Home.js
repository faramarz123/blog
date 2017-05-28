import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';

// console.log(createCookie)

class Home extends Component
{
    
        constructor(props) {
            super(props);
            this.state = {token: '', usernamevalue: '', passwordvalue: ''};
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleUsername = this.handleUsername.bind(this);
            this.handlePassword = this.handlePassword.bind(this);
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
            return(
                <form onSubmit={this.handleSubmit}>
                 <h2>Login form</h2><br/>
                 <label>
                 Username:
                 </label>   
                        <input type="text" name="name"  onChange={this.handleUsername}/>
                 <br />
                 <label>
                 Password:
                 </label>
                        <input type="text" name="password" onChange={this.handlePassword} />
                 
                 <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Home;
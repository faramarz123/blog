import React, { Component } from 'react';


class Main extends Component{
    render(){
        return (
                <div className="main-container">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="col-md-7 col-md-offset-2" style={{marginTop: 5}}>
                            Menu
                        </div>    
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                
        )}
}

export default Main;
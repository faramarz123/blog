import React, { Component } from 'react';


class Main extends Component{
    render(){
        return (
                <div className="main-container">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="col-md-7 col-md-offset-2 text-center" style={{marginTop: 5,}}>
                            <h1>بلاگ</h1>
                        </div>    
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                
        )}
}

export default Main;
//import required data
import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
// import Comments from './Comments';
import List from './displaylist';

//posts component
class Posts extends Component{
    constructor(props)
    {
        super(props);
        this.state = {allposts: null, mostvisitedposts: null };
    }

    componentDidMount() {
     // GET httprequest to get posts 
     fetch('https://ancient-bayou-43826.herokuapp.com/posts', {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'token': readCookie('token')
            }
        })
        .then(res => res.json())
        .then(res => { return res.posts})
        .then(res => {  
            this.setState({allposts: res});
            
            //get mostvisited posts and attach it to mostvisitedDOM
            const mostvisiteds = res.sort(function (a, b) {
                return b.visits - a.visits;
            }).slice(0, 5);
            this.setState({mostvisitedposts: mostvisiteds});
        
        })
           
  }

    render()
    {
        return(
            // !this.state.allposts ? <h1 dir="rtl">در حال بارگذاری ...</h1> :
            <div className="row"> 
                <div className="posts-panel">
                    <div className="col-md-4">
                        <div className=" panel panel-default">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">
                                     پربازدیدترین ها
                                </h3>
                            </div>
                            <div dir="rtl" className="panel-body">
                                <div className="col-md-12">
                                    <List isPost={true} isComment={false} isMostVisited={true} data={this.state.mostvisitedposts}/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="panel panel-default">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">
                                 پست های کاربر
                                </h3>
                            </div>
                        <div className="panel-body">
                            <div dir="rtl" className="col-md-12">
                                <List isPost={true} isComment={false} isMostVisited={false} data={this.state.allposts}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Posts;
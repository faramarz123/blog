//import required data
import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import PostsPanel from './postsPanel';
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
            // const mostvisiteds1 = getTop5Posts(res);
            const mostvisiteds = res.sort(function (a, b) {
                return b.visits - a.visits;
            }).slice(0, 5);
            this.setState({mostvisitedposts: mostvisiteds});
        
        })
           
  }

    render()
    {
        return(
            <div className="row">   
                    <div className="col-md-4">
                        <PostsPanel title="پربازدیدترین ها" isPost={true} isComment={false} isMostVisited={true} data={this.state.mostvisitedposts} />
                    </div>
                    <div className="col-md-8 ">
                        <PostsPanel title="پست های کاربر" isPost={true} isComment={false} isMostVisited={false} data={this.state.allposts} />
                    </div>
            </div>
        )
    }
}

export default Posts;
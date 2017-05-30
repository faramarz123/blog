import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import List from './displaylist';
import Comment from './showcomment';


class Post extends Component
{
    
    constructor(props)
    {
        super(props);
        // this.getComments = this.getComments.bind(this);
        this.getComments = this.getComments.bind(this);
        this.state = {comments: null};
    }
   
     getComments(id)
    {
        // e.preventDefault();
        // console.log('hello from button eventHandler. And id is :  ',id);
        // return(<h1>hello</h1>);
        fetch('https://ancient-bayou-43826.herokuapp.com/comments/'+id, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'token': readCookie('token')
            }
        })
        .then(res => res.json())
        .then(res => res.comments)
        .then(res => {
                this.setState({comments: res[0].comments});
                console.log('resssss.comments is : ',res[0].comments);
                console.log('comments is : ',this.state.comments);
                // return res.comments; 
            });
        // this.setState({comments: res}); 
    }
    render()
    {
        
        const {data, isMostVisited} = this.props;
        // console.log('show post',data);
        //Show mostvisited posts
        if(isMostVisited)
            return(
                <div>
                    <p>{data.title}</p><br />
                    بازدید ها : <span>{data.visits}</span><hr />
                </div>
        )

        //show all posts
        else if(!isMostVisited)
        {
            return(
                <div>
                    <title>{data.title}</title><br />
                    <p>{data.content}</p>
                    <button className="btn" onClick={() => this.getComments(data.id)} >نظرات</button>
                    <List isPost={false} isComment={true} isMostVisited={false} data={this.state.comments}/><hr />
                </div>
            )
        }
    }
}

export default Post;
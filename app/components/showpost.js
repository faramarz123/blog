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
    
    //button's event handler to get post's comments 
     getComments(id)
    {
        if(!this.state.comments)
        {
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
                //if the post's comment is null
                if(!res[0].comments)
                    this.setState({comments: ['کامنت وجود ندارد.']});
                else
                    this.setState({comments: res[0].comments});
            });
        }
    }
    render()
    {

        const {data, isMostVisited} = this.props;
        
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
import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import List from './displaylist';

class Post extends Component
{

    constructor(props)
    {
        super(props);
        this.getComments = this.getComments.bind(this);
        this.state = {comments: null};
    }
    getComments(id)
    {
        // event.preventDefault();
        
        fetch('https://ancient-bayou-43826.herokuapp.com/comments/'+id, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'token': readCookie('token')
            }
        })
        .then(res => res.jso())
        .then(res => {return res.comments;})
        .then(res => {
            console.log('comments are : ',res);
            this.setState({comments: res}); 
        })

    }
    render()
    {
        
        const {data, isMostVisited} = this.props;
        console.log('show post',data);
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
                    <button className="btn"  >نظرات</button><hr />
                    {/*onClick={this.getComments(data.id)}*/}
                    {/*<List isComment={true} isPost={false} isMostVisited={false} data={this.state.comments}/>*/}
                </div>
            )
        }
    }
}

export default Post;
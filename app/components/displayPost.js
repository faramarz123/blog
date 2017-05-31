import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from '../cookieCollection.js';
import List from './displayList';
import Comment from './displayComment';
import Error from './error';

const divStyle = {
  color: 'blue',
};


class Post extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {comments: null, getCommentsError: false};
        // this.getComments = this.getComments.bind(this);
    }
    
    //button's event handler to get post's comments 
    //  getComments(id)
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
            })
            .catch(err => 
            {
                console.log('Error is : ',err);
                this.setState({getCommentsError: true});
                
            })
        }
    }
    render()
    {
        const {data, isMostVisited} = this.props;
        
        //Show mostvisited posts
        if(isMostVisited)
            return(
                <div >
                    <p>{data.title}</p><br />
                    بازدید ها : <span style={divStyle}>{data.visits}</span><hr />
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
                    {!this.state.getCommentsError ? <div><List isPost={false} isComment={true} isMostVisited={false} data={this.state.comments}/><hr /></div> : <Error data="خطا در بارگیری نظرات." />}
                </div>
            )
        }
    }
}

export default Post;
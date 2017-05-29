import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import Comments from './Comments'
class Posts extends Component{
    constructor(props)
    {
        super(props);
        this.state = {Posts: null, mostVisitedPosts: null};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    componentDidMount() {
     console.log('cookie is: ',readCookie('token'));
     fetch('https://ancient-bayou-43826.herokuapp.com/posts', {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'token': readCookie('token')
            }
        })
        .then(res => res.json())
        .then(res => { 
                console.log("Posts are; ", res.posts); return res.posts;
                
            })
        .then(res => { 
            console.log(res);
            // const list = res.forEach(item => <li>{item.content}</li>)
            // res.forEach(item => console.log(item.visits))
            const list = res.map(item => <ol className='row' key={item.id}><p>{item.content}</p>
             <Comments commentId={item.id} />
            </ol>)
            this.setState({Posts: list});
        // })
            // return <ul>{Posts}</ul>
        
        })
            // .then(res => res.json())
  }
    render()
    {
        return(
             !this.state.Posts ? <h1>Loading ...</h1> :
            <div dir="rtl"><ul>{this.state.Posts}</ul></div>
        )
    }
}

export default Posts;
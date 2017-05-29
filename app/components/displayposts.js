import React, {Component} from 'react';
import Comments from './Comments';
import PostsList from './postlist';

class Displayallposts extends Component
{
    render()
    {
        console.log('allposts from displayallposts are : ',this.props.allposts);
        // const list = (this.props.allposts).map(post => <ol className='row' key={post.id}><p>{post.content}</p><Comments id={post.id} /></ol>);
        return(
        !this.props.allposts ? <h2>بارگذاری ...</h2> : 
                <ul> <PostsList posts={this.props.allposts} /></ul>
            // <ul>{this.props.allposts}</ul>
        )
    }
}

export default Displayallposts;
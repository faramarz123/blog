import React, {Component} from 'react';
import Comments from './Comments';

class Displayallposts extends Component
{
    render()
    {
        console.log('postList is : ',this.props.allposts);
        const list = (this.props.allposts).map(post => <ol className='row' key={post.id}><p>{post.content}</p><Comments id={post.id} /></ol>);
        return(
            <ul>{list}</ul>
        )
    }
}

export default Displayallposts;
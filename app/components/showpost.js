import React, {Component} from 'react';

class Post extends Component
{

    render()
    {
        console.log('post is : ',this.props.data);
        
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.content}</p>
            </div>
        )
    }
}

export default Post;
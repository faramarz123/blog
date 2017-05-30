import React, {Component} from 'react';

class Post extends Component
{

    
    render()
    {
        let data = this.props.data;
        console.log('post is :',this.props.data,' and isMostVisited is ',this.props.isMostVisited);
        
        if(this.props.isMostVisited)
            return(
                <div>
                    
                    <p>{data.title}</p><br />
                    بازدید ها : <span>{data.visits}</span><hr />
                </div>
        )
        else
        {
            return(
                <div>
                    <title>{data.title}</title><br />
                    <p>{data.content}</p><hr />
                </div>
            )
        }
    }
}

export default Post;
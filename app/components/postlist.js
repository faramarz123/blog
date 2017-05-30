import React, {Component} from 'react'

class PostsList extends Component
{
    render()
    {
        
        // let posts = this.props.posts.map(post =>
        //     <li className="list-group-item" key={post.id} >{post.content}</li>
        // );
        let posts=[];

        //Mostvisited posts
        if(this.props.isallormostvisit)
        {
            console.log('most visiteds')
              posts = this.props.posts.map(post =>
                <li className="list-group-item" key={post.id} >{post.title}</li>
            );
            
        }
        else if(this.props.isallormostvisit)
        {
             posts = this.props.posts.map(post =>
                <li className="list-group-item" key={post.id} >{post.content}</li>
            );
            
        }
        return(
                !this.props.posts ? <h2>بارگذاری ...</h2> : 
                        <ul className="list-group">
                            hello{ posts  }
                        </ul>
            )
    }
}

export default PostsList;
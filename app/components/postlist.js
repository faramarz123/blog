import React, {Component} from 'react'

class PostsList extends Component
{
    render()
    {
        // console.log('posts from postlistsssss. ', this.props.posts);
        let arr = this.props.posts;
        let posts = this.props.posts.map(post =>
            <li className="list-group-item" key={post.id} >{post.content}</li>
        );
        return(
            !this.props.posts ? <h2>بارگذاری ...</h2> : 
                    <ul className="list-group">
                        {posts}
                     </ul>
        )
    }
}

export default PostsList;
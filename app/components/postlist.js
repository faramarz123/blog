import React, {Component} from 'react'

class PostsList extends Component
{
    render()
    {
        console.log('posts from postlistsssss. ', this.props.postss);
        let arr = this.props.postss;
        // let posts =[1,2,3].map((item,index) => <li key={index}>item</li>)
        let posts = arr.map(post =>
            <li className="list-group-item" key={post.id} >{post.content}</li>
        );
        return(
            !this.props.postss ? <h2>بارگذاری ...</h2> : 
                    <ul className="list-group">
                        {posts}
                     </ul>
        )
    }
}

export default PostsList;
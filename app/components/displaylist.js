import React, {Component} from 'react';
import Comments from './Comments';
import Post from './showpost';

class List extends Component
{
    
    render()
    {
        console.log('allposts from displayallposts are : ',this.props.data);
        // const list = (this.props.allposts).map(post => <ol className='row' key={post.id}><p>{post.content}</p><Comments id={post.id} /></ol>);
        const posts = this.props.data;
        
        // if(!this.props)     
        //     return(<h2>بارگذاری ...</h2>)
        
        // return(
            // !this.props.data ? <h2>بارگذاری ...</h2> : 
          if(posts)
          {
           return( 
            <div> 
                {
                    posts.map((post) =>             
                        <Post data={post} key={post.id} />
                )}
            </div>
            )
                // <ul> <PostsList isallormostvisit={this.props.isallormostvisited} posts={this.props.data} /></ul>)
          }    
}
}

export default List;
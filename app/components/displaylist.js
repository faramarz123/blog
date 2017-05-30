import React, {Component} from 'react';
import Comments from './Comments';
import Post from './showpost';

class List extends Component
{
    
    render()
    {
        console.log('allposts from displayallposts are : ',this.props.data);
        // const list = (this.props.allposts).map(post => <ol className='row' key={post.id}><p>{post.content}</p><Comments id={post.id} /></ol>);
        const data = this.props.data;
        
        if(!data)     
            return(<h2>بارگذاری ...</h2>);
        
        // return(
            // !this.props.data ? <h2>بارگذاری ...</h2> : 
          if(data)
          {
           return( 
            <div> 
                {
                    data.map((post) =>             
                        <Post isMostVisited={this.props.isMostVisited} data={post} key={post.id} />
                )}
            </div>
            )
                // <ul> <PostsList isallormostvisit={this.props.isallormostvisited} posts={this.props.data} /></ul>)
          }    
}
}

export default List;
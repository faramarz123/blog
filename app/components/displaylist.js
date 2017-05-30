import React, {Component} from 'react';
// import Comments from './Comments';
import Post from './showpost';
import Comment from './showcomment';

class List extends Component
{
    
    render()
    {
        const {data, isPost, isComment, isMostVisited} = this.props;
        
            if(!data && isPost)     
            return(<h2>بارگذاری ...</h2>);
        
          //show posts list
          else if(isPost)
          {
            //   console.log('is postlist. and data is : ',data);
           return( 
            <div> 
                {
                    data.map((post,index) => {return <Post isMostVisited={isMostVisited} key={index} data={post}></Post>})
                    /*data.map(post => {return <Post isMostVisited={isMostVisited} data={post} key={post.id} />})*/
                }
            </div>
            )
        }

        //show comment list
          else if(isComment)
          {
              console.log('comments from comment areeeeee : ',data);
            //   console.log('comment list. And data is : ', data);
            if(data)
            {
              return(
                  <div>
                      {
                        data.map((comment,index) => {return <Comment key={index} data={data} ></Comment>})
                      }
                  </div>
              )
            }
            else
            {
                return(
                    <div>
                        <Comment data={data} />
                    </div>
                )
            }
          }
}
}

export default List;
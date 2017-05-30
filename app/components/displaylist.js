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
            if(data)
            {
              return(
                  <div><ul>
                      {
                        data.map((comment,index) => {return <Comment key={index} index={index} data={comment} ></Comment>})
                      }</ul>
                  </div>
              )
            }
            else
            {
                return(
                    <div>
                        <ul>
                        {
                            <Comment key={0} data={data} />
                        }
                        </ul>
                    </div>
                )
            }
          }
}
}

export default List;
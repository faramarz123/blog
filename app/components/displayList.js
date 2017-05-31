import React, {Component} from 'react';
import Post from './displayPost';
import Comment from './displayComment';

class List extends Component
{
    
    render()
    {
        const {data, isPost, isComment, isMostVisited} = this.props;

         //loading
         if((!data && isPost) )     
            return(<h2>بارگذاری ...</h2>);
        
          //show posts list
          else if(isPost)
          {
           return( 
            <div> 
                {
                    data.map((post,index) => {return <Post isMostVisited={isMostVisited} key={index} data={post}></Post>})
                }
            </div>
            )
        }

        //show comment list
          else if(isComment)
          {
            //if data is not null
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
            //if data is null
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
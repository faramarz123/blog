import React,{Component} from 'react';
import List from './displaylist';

class Comment extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            comments: null
        };
       
    }
    
    render()
    {
        const {data} = this.props;
        // const {data} = this.props;
        console.log('Comments from showcommentssssssssss : ',data)
        

    return(
        !this.state.comments ? <div></div> :
        <div>
            <p>
                {/*{data}*/}
            </p>
        </div>
    )

    }
}

export default Comment;
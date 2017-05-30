import React,{Component} from 'react';

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

    return(
        !this.state.comments ? <div></div> :
        <div>
            <p>
                {data.content}
            </p>
        </div>
    )

    }
}

export default Comment;
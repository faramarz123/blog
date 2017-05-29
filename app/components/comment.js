import React,{Component} from 'react';

class Comment extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            commList: null
        };
       
    }
    
    render()
    {
        
        let arr  = this.props.value;
        // this.setState({commList: this.props.value})
        console.log('comments from commentttt and arr is :',arr );
        if(arr)
        {
            let list = arr.map(item => <li>{item}</li>);
            return(
                <div>
                    <ul>{list}</ul><hr />
                </div>
            )
        }
        else
        {
            return <div><ul></ul><hr /></div>
        }
        // let commentsList = (this.props.value).map(item => <ol className="row" key={++a}> <p>{item}</p> </ol>); 
        // return( !arr ? <li>هیچ کامنت موجود نمی باشد. </li> : <ul>{list}</ul>)
    }
}

export default Comment;
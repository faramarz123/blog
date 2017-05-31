import React,{Component} from 'react';
import List from './displayList';
import styles from '../displayComment.css'

const divStyle = {
  color: 'blue',
};

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

        //Show comment content
        return(
            !data ? <p></p> :
            <div style={divStyle}>
                <p>
                    {this.props.index}. {data}
                </p>
            </div>
        )}
}

export default Comment;
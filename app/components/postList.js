import React, {Component} from 'react';
import Comments from './Comments';

class Postlist extends Component
{
    render()
    {
        console.log('postList is : ',this.props.value);
        const list = (this.props.value).map(item => <ol className='row' key={item.id}><p>{item.content}</p><Comments id={item.id} /></ol>);
        return(
            <ul>{list}</ul>
        )
    }
}

export default Postlist;
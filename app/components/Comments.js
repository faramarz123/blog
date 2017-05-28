import React,{Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';

class Comments extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {commentsUL: null};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({commentsUL: null});
        e.preventDefault();
        console.log('Comments mount. ');
        fetch('https://ancient-bayou-43826.herokuapp.com/comments/'+this.props.commentId, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'token': readCookie('token')
            }
        })
        .then(res => res.json())
        .then(res => res.comments)
        .then(res => { 
            res.forEach(item => {
                let a = 0;
                console.log(item);
                const list1 = item.comments;
                if(list1)
                {
                    const list2 = list1.map(comm => <li key={(++a)}><p>{comm}</p></li>)
                    this.setState({commentsUL: list2})
                }
                else
                {
                    const list2 = <li>هیچ کامنت وجود ندارد.</li>
                    this.setState({commentsUL: list2})
                }
        })
         });

    }
    componentDidMount() {
     
    }
    render()
    {
        return(
            <div dir="rtl"><button onClick={this.handleClick}>نظرات</button><ul>{this.state.commentsUL}</ul></div>
        )
    }
}
export default Comments;
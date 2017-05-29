import React,{Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import Comment from './comment';

class Comments extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {commentsUL: null};
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e) {

        e.preventDefault();
        console.log('Comments mount. ');
        fetch('https://ancient-bayou-43826.herokuapp.com/comments/'+this.props.id, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'token': readCookie('token')
            }
        })
        .then(res => res.json())
        .then(res => res.comments)
        .then(res => { 
            console.log('res is : ', res);
            res.forEach(item => {
                let a = 0;
                // console.log('item.res is : ', item.comments);
                this.setState({commentsUL: item.comments});
                // console.log('commentsUL is : ', this.state.commentsUL);
                const list1 = item.comments;
                // console.log('list1 is : ',list1);

                // if(list1)
                // {
                //     this.setState({commentsUL: list1})
                //     // console.log('this.state.commentsUL is : ',this.state.commentsUL);
                //     const list2 = list1.map(comm => <li key={(++a)}><p>{comm}</p></li>)
                //     // this.setState({commentsUL: list2})
                // }
                // else
                // {
                //     const list2 = <li>هیچ کامنت وجود ندارد.</li>
                //     this.setState({commentsUL: list2})
                // }
        })
         });
        

    }
    componentDidMount() {
     
    }
    render()
    {
        return(
            <div dir="rtl"> <button className="btn" onClick={this.handleClick}>نظرات</button> <Comment value={this.state.commentsUL} /></div>
            // <div dir="rtl"><button onClick={this.handleClick}>نظرات</button><ul>{this.state.commentsUL}</ul></div>
        )
    }
}
export default Comments;
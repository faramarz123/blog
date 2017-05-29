//import required data
import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import Comments from './Comments';
import Postlist from './postList';

//posts component
class Posts extends Component{
    constructor(props)
    {
        super(props);
        this.state = {Posts: null, listpost: null, mostVisitedPosts: null};
    }

    componentDidMount() {
     // GET httprequest to get posts 
     fetch('https://ancient-bayou-43826.herokuapp.com/posts', {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'token': readCookie('token')
            }
        })
        .then(res => res.json())
        .then(res => Promise.resolve(res.posts))
        .then(res => { 
            this.setState({listpost: res});
            //Attach posts to reactDOM
            const list = res.map(item => <ol className='row' key={item.id}><p>{item.content}</p>
            {/*this.setState({listpost: res})*/}
             <Comments commentId={item.id} /><hr/>
            </ol>)

            //get mostvisited posts and attach it to mostvisitedDOM
            const mostvisits = res.sort(function (a, b) {
                return b.visits - a.visits;
            }).slice(0, 5);
            console.log('mostvisits are; ',mostvisits);
            const mostvisitsDOM = mostvisits.map(post => <ol dir="rtl" key={post.id} className="col-md-12"><p>{post.title}</p><br /><span>تعداد بازدیدها: {post.visits}</span><hr/></ol>)
            this.setState({mostVisitedPosts: mostvisitsDOM});

            this.setState({Posts: list});
            
        
        })
           
  }
  //render reactDOM
    render()
    {
        return(
            !this.state.Posts ? <h1 dir="rtl">در حال بارگذاری ...</h1> :
            <div className="row"> 
                <div className="posts-panel">
                    <div className="col-md-4">
                        <div className=" panel panel-default">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">
                                     پربازدیدترین ها
                                </h3>
                            </div>
                            <div dir="rtl" className="panel-body">
                                <ul className="col-md-12">{this.state.mostVisitedPosts}</ul>
                                {/*<ul dir="rtl" className="col-md-12">{this.state.mostVisitedPosts}</ul></div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="panel panel-default">
                            <div className="panel-heading text-center">
                                <h3 class="panel-title">
                                 پست های کاربر
                                </h3>
                            </div>
                        <div className="panel-body">
                            <div dir="rtl" className="col-md-12">
                                <Postlist  name='ali' value={this.state.listpost}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Posts;
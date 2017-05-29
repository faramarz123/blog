//import required data
import React, {Component} from 'react';
import {createCookie, readCookie, eraseCookie} from './cookieCollection.js';
import Comments from './Comments';
import Displayallposts from './displayposts';
import Mostvisitedposts from './displaymostvisitedposts';

//posts component
class Posts extends Component{
    constructor(props)
    {
        super(props);
        this.state = {allposts: null, mostvisitedposts: null, listpost: null };
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
        .then(res => { console.log('allposts from loadposts : ',res.posts); return res.posts})
        // .then(res => Promise.resolve(res.posts))
        .then(res => {  
            this.setState({allposts: res});
            //Attach posts to reactDOM
            /*const list = res.map(item => <ol className='row' key={item.id}><p>{item.content}</p>
             <Comments commentId={item.id} /><hr/>
            </ol>)*/

            //get mostvisited posts and attach it to mostvisitedDOM
            const mostvisiteds = res.sort(function (a, b) {
                return b.visits - a.visits;
            }).slice(0, 5);
            console.log('mostvisitedposts are; ',mostvisiteds);
            // const mostvisitsDOM = mostvisits.map(post => <ol dir="rtl" key={post.id} className="col-md-12"><p>{post.title}</p><br /><span>تعداد بازدیدها: {post.visits}</span><hr/></ol>)
            this.setState({mostvisitedposts: mostvisiteds});

            // this.setState({allposts: list});
            
        
        })
           
  }
  //render reactDOM
    render()
    {
        return(
            // !this.state.Posts ? <h1 dir="rtl">در حال بارگذاری ...</h1> :
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
                                <ul className="col-md-12">
                                    <Mostvisitedposts mostvisitedposts={this.state.mostvisitedposts}/>
                                    </ul>
                                {/*<ul dir="rtl" className="col-md-12">{this.state.mostVisitedPosts}</ul></div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="panel panel-default">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">
                                 پست های کاربر
                                </h3>
                            </div>
                        <div className="panel-body">
                            <div dir="rtl" className="col-md-12">
                                <Displayallposts  allposts={this.state.allposts}/>
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
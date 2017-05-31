import React,{Component} from 'react';
import List from './displayList';

class PostsPanel extends Component
{
    render()
    {
        const {data, isPost, isComment, isMostVisited, title} = this.props;
        return(
            <div className=" panel panel-default">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">
                                     {title}
                                </h3>
                            </div>
                            <div dir="rtl" className="panel-body">
                                <div className="col-md-12">
                                    <List isPost={isPost} isComment={isComment} isMostVisited={isMostVisited} data={data}/>
                                </div>
                            </div>
            </div>
        )
    }
}

export default PostsPanel;
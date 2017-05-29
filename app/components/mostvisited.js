import React, {Component} from 'react';

class Mostvisited extends Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        console.log('mostvisitedddd is: ',this.props.data);
        return(
        // let Data = this.props.data;
        // let lisst = Data.map(post => <ol dir="rtl" key={post.id} className="col-md-12"><p>{post.title}</p><br /><span>تعداد بازدیدها: {post.visits}</span><hr/></ol>)
        // console.log('mostvisited is : ',Data);
       
            <ul>
                hello
                {/*{lisst}*/}
            </ul>
        )
    }
}

export default Mostvisited;
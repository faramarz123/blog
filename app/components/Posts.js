import React, {Component} from 'react';

class Posts extends Component{
    constructor(props)
    {
        super(props);
        this.state = {Posts: null}
    }
    componentDidMount() {
    fetchUser('faramarz123')
      .then(res => res.json())
      .then(user => {
        this.setState({
          user
        })
    })
  }
    render()
    {
        return(
            <div>
                <p>Post List</p>
            </div>
        )
    }
}

export default Posts;
import React,{Component} from 'react';

class Error extends Component
{
    render()
    {
        const {data} = this.props;

        return(
            <div>
                <div style={{color: 'red'}}>
                    {data}
                    </div>
                    <hr />
            </div>
        )
    }
}

export default Error;
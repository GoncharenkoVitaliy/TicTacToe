import React from 'react';
import './CountGlobal.css';

class CountGlobal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='count-global'>
                <p>
                    <span className='count-x'>X : {this.props.X}</span>
                    <span className='count-name'>-----</span>
                    <span className='count-o'>O : {this.props.O}</span>
                </p>
            </div>
        )
    }
}

export default CountGlobal;
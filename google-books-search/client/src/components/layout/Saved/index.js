import React from 'react';

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = () => {
        console.log('Saved button clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Saved</button>
            </div>
        )
    }
}

export default Saved;
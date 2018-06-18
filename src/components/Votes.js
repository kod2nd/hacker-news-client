import React, { Component } from 'react';

class Votes extends Component {
    constructor(props){
        super(props);
        this.state = {
            votes: props.votes
        }
    }
  
    render() {
        return (
            <div>
                <div className="vote-container">
                    <div>
                        {"Votes: " + this.state.votes}
                    </div>
                    <button onClick={() => {
                        return this.increaseVoteValue()
                    }}>+</button>
                    <button onClick={() => {return this.decreaseVoteValue()}}>-</button>
                </div>
            </div>
        );
    }

    increaseVoteValue() {
        this.setState({
            votes: this.state.votes + 1
        })
    }

    decreaseVoteValue() {
        this.setState({
            votes: this.state.votes - 1
        })
    }
}

export default Votes;
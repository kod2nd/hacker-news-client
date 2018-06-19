import React from 'react';

const Votes = (props) => (
    <div>
        <div className="vote-container">
            <div>
                {"Votes: " + props.votes}
            </div>
            <button onClick={() => {
                return props.increaseVoteValue(props.index)
            }}>+</button>
            <button onClick={() => { return props.decreaseVoteValue(props.index) }}>-</button>
        </div>
    </div>
);

export default Votes;

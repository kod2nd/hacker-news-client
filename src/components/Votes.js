import React from 'react';

const Votes = (props) => (
    <div>
        <div className="vote-container">
            <div className="footer-title">
                {"Votes: " + props.votes}
            </div>
            <button
                id="vote-up"
                onClick={() => {
                    return props.increaseVoteValue(props.index)
                }}>
                <img src="https://image.flaticon.com/icons/svg/148/148764.svg" alt="" />
            </button>
            <button
                id="vote-down"
                onClick={() => {
                    return props.decreaseVoteValue(props.index)
                }}>
                <img src="https://image.flaticon.com/icons/svg/334/334047.svg" alt="" />
                </button>
        </div>

    </div>
);

export default Votes;

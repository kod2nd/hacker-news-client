import React from 'react';

const PublishedAtInfo = (props) => {
    const dateTimeList = props.publishedAtInfo.split('T')
    const time = dateTimeList[1]
    return(
    <div>
        <div className="footer-title">Published on:</div>
        <div>{dateTimeList[0]}</div>
        <div>{time.slice(0,-1)}</div>
    </div>
);}

export default PublishedAtInfo;

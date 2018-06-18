import React from 'react';

const UrlLink = (props) => (
    <div>
        <div id="url-link">
            <div>Link to Article:</div>
            <a href={props.linkToArticle}>{props.linkToArticle}</a>
        </div>
    </div>
);

export default UrlLink;

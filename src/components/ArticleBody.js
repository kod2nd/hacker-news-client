import React from 'react';

const ArticleBody = (props) => (
    <div className="article-body">
        <div className="container">
        <img src={props.bodyImage} alt="" />
        </div>
        <p>{props.description}</p>
    </div>
);

export default ArticleBody;

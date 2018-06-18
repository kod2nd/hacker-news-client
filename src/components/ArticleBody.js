import React from 'react';

const ArticleBody = (props) => (
    <div>
        <img src={props.bodyImage} alt="" />
        <p>{props.description}</p>
    </div>
);

export default ArticleBody;

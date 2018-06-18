import React from 'react';

const ArticleHeader = (props) => (
    <div>
        <h2>{props.title}</h2>
        <div className="author-source"> 
             {props.author===null ? null :<author className="author">{"Author: " + props.author}</author>}
            <div id={props.source.id} className="source">{"Source: " + props.source.name}</div>
        </div>
    </div>
);

export default ArticleHeader;

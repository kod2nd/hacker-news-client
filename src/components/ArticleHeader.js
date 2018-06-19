import React from 'react';

const ArticleHeader = (props) => (
    <div className="header">
        <h2>{props.title}</h2>
        <div className="author-source"> 
             {props.author===null ? null :<div className="author">{"Author: " + props.author}</div>}
            <div id={props.id} className="source">{"Source: " + props.name}</div>
        </div>
    </div>
);

export default ArticleHeader;

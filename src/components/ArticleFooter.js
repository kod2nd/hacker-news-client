import React from 'react';
import UrlLink from './UrlLink';
import PublishedAtInfo from './PublishedAtInfo';
import Votes from './Votes';

const ArticleFooter = (props) => (
    <div className="footer">
        <PublishedAtInfo publishedAtInfo={props.publishedAt}/>
        <UrlLink linkToArticle={props.linkToArticle}/>
        <Votes 
        votes={props.votes}
        index={props.index}
        increaseVoteValue={props.increaseVoteValue} 
        decreaseVoteValue={props.decreaseVoteValue}/>
    </div>
);

export default ArticleFooter;

import React from 'react';
import UrlLink from './UrlLink';
import PublishedAtInfo from './PublishedAtInfo';
import Votes from './Votes';

const ArticleFooter = (props) => (
    <div>
        <UrlLink linkToArticle={props.linkToArticle}/>
        <Votes 
        votes={props.votes}
        index={props.index}
        increaseVoteValue={props.increaseVoteValue} 
        decreaseVoteValue={props.decreaseVoteValue}/>
        <PublishedAtInfo publishedAtInfo={props.publishedAt}/>
    </div>
);

export default ArticleFooter;

import React from 'react';
import ArticleHeader from './ArticleHeader'
import ArticleBody from './ArticleBody';
import ArticleFooter from './ArticleFooter';

const Article = (props) => (
    <div>
        <ArticleHeader
            title={props.article.title}
            author={props.article.author}
            source={props.article.source} />

        <ArticleBody
            bodyImage={props.article.urlToImage}
            description={props.article.description} />

        <ArticleFooter
            linkToArticle={props.article.url}
            votes={props.article.votes}
            publishedAt={props.article.publishedAt} />
    </div>
);

export default Article;
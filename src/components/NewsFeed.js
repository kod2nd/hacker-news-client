import React, { Component } from "react";
import { articles } from '../seedData';
import Article from './Article'

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article, i) => {
          return <Article article={article}/>
        })}

      </div>);
  }
}

export default NewsFeed;

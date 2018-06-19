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
          return <Article
            index={i}
            key={i}
            article={article}
            increaseVoteValue={(i) => { this.increaseVoteValue(i) }} decreaseVoteValue={(i) => { this.decreaseVoteValue(i) }} />
        })}
      </div>);
  }

  increaseVoteValue(index) {
    const updatedVotes = this.state.articles[index].votes + 1
    const objectToUpdate = { ...this.state.articles[index], votes: updatedVotes }
    this.setState({
      articles: [...this.state.articles.slice(0, index), objectToUpdate,
      ...this.state.articles.slice(index + 1)]

    })
  }

  decreaseVoteValue(index) {
    const updatedVotes = this.state.articles[index].votes - 1
    const objectToUpdate = { ...this.state.articles[index], votes: updatedVotes }
    this.setState({
      articles: [...this.state.articles.slice(0, index), objectToUpdate,
      ...this.state.articles.slice(index + 1)]

    })
  }
}

export default NewsFeed;

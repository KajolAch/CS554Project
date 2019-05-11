import React, { Component } from 'react';
import './ArticleFiles.css';
import DataList from './DataList';

import articles from './data';

class QuackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articles
    };
  }

  async componentDidMount() { 
    this.setState({
      articles: articles
    });
    // console.log(this.state.articles)
  }
  render() {
    // console.log(this.state.articles);
    let body = (
      <div className="container">
          <DataList articles={this.state.articles} />
      </div>
    );
    return body;
  }
}

export default QuackContainer;
import React, {Component} from 'react';
// import Article from './Article';

class QuackList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }
  render() {
  // console.log("proops", this.state)
  // console.log("Hello",this.state);
    const data = this.state.articles;
    if (!articles.length) { //no users
        return <p>No articles to display</p>;
    }
    return <div className="quack-list">
            {
                articles.map((item, index) => {
                    return <Article key={index} {...item} />;
                })
            }
    </div>;
  }
}

export default QuackList;
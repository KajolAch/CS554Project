import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import QuackContainer from './QuackContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: []
    }
}
async componentDidMount() {
  // const articles = await ApiService.getArticles({
  //     first_name: '',
  //     last_name: ''
  // });
  // this.setState({
  //     articles: articles
  // });
}
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <QuackContainer articles={this.state.articles}/>
      </div>
    );
  }
  
}

export default App;

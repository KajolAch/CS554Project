import React from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import QuackCentre from './QuackCentre';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
   

    </div> */}
    
       <Route path="/quackcentre"  exact component={QuackCentre} />
       </Router>

    
  );
}

export default App;
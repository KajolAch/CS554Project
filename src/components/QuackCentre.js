import React, { Component } from "react";
import data from './data.js';
import './App.css';

class QuackCentre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
      }
      async componentDidMount() { 
        this.setState({
          data: data
        });
    }
  render() {
    return (
      <div className="card">
       
        <div className="card-body">
          <h5 className="card-title">Quack Centre</h5>
         
          <p className="cap-first-letter:first-letter">
            A place for students to interact and discuss to find solutions to any problems that they are facing!
          </p>
          <button  className="button" >
                          Comment
                        </button>
        </div>
        <DataList data={this.state.data} />
      </div>
    );
  }
}

export default QuackCentre;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.setState = {
        on: true
    };
  }
  
  homerWorks = () => {
      alert('yes');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.homerWorks}>
          Is Homer Working?
        </button>
        <Quotes />
      </div>
    );
  }
}

export default App;


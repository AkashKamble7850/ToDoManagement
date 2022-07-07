import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter by={1}/>
      <Counter by={5}/>
      <Counter by={10}/>
      </div>
    );  
  }
}

export default App;

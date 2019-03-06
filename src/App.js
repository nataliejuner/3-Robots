import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/userInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
      </div>
    );
  }
}

export default App;
